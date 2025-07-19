import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { Colors } from './constants/colors';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './components/BottomTabs';
import CandlestickChart from './components/CandlestickChart';
import CurrencySelector from './components/CurrencySelector';
import DataList from './components/DataList';
import Header from './components/Header';
import OrderHistory from './components/OrderHistory';
import PriceDisplay from './components/PriceDisplay';
import StatsCards from './components/StatsCards';

import {
  generateUpdate,
  getInitialData,
  generateTimeframeData,
} from './services/DataSimulator';
import { MarketData } from './types/Chart';
import {
  convertToDataItems,
  calculatePriceChange,
  formatPrice,
  formatStatsData,
} from './utils';
import { PortalProvider } from '@gorhom/portal';

function App() {
  const [selectedTab, setSelectedTab] = useState('Open');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7D');
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [previousPrice, setPreviousPrice] = useState<number>(0);

  // Initialize and start updates
  useEffect(() => {
    // Get initial data
    const initialData = getInitialData(selectedTimeframe);
    setMarketData(initialData);
    setPreviousPrice(initialData.currentPrice);

    // Update every 5 seconds
    const interval = setInterval(() => {
      setMarketData((prevData) => {
        const newData = generateUpdate();
        if (prevData) {
          setPreviousPrice(prevData.currentPrice);
        }
        return newData;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []); // Only run once on mount

  // Handle timeframe changes
  useEffect(() => {
    if (marketData) {
      // Only run if we already have data (not on initial mount)
      const newData = generateTimeframeData(selectedTimeframe);
      setMarketData(newData);
      setPreviousPrice(newData.currentPrice);
    }
  }, [selectedTimeframe]); // Run when timeframe changes

  if (!marketData) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={Colors.PRIMARY_BACKGROUND}
        />
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <PortalProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={Colors.PRIMARY_BACKGROUND}
          />
          <Header />

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 50 }}
          >
            <View style={styles.statsContainer}>
              <StatsCards data={formatStatsData(marketData)} />
              <View style={styles.priceContainer}>
                <PriceDisplay
                  price={formatPrice(marketData.currentPrice)}
                  change={calculatePriceChange(
                    marketData.currentPrice,
                    previousPrice
                  )}
                />
                <CurrencySelector />
              </View>
            </View>

            <View style={styles.chartContainer}>
              <View style={styles.chartContent}>
                <CandlestickChart
                  data={marketData.candles}
                  selectedTimeframe={selectedTimeframe}
                  setSelectedTimeframe={setSelectedTimeframe}
                />

                <BottomTabs
                  selectedTab={selectedTab}
                  onTabChange={setSelectedTab}
                />
                <OrderHistory />
              </View>

              <View>
                <DataList
                  title="Order book"
                  data={convertToDataItems(marketData, 'orderbook')}
                />
                <DataList
                  title="Trades"
                  data={convertToDataItems(marketData, 'trades')}
                  containerStyle={{ marginTop: 20 }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </PortalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  chartContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 30,
    marginRight: 20,
  },
  priceContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  chartContent: {
    flex: 1,
    marginRight: 10,
  },
});

export default App;
