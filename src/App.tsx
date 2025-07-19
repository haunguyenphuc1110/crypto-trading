import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

// Import colors
import { Colors } from './constants/colors';

// Import all the new components
import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';
import StatsCards from './components/StatsCards';
import CurrencySelector from './components/CurrencySelector';
import CandlestickChart from './components/CandlestickChart';
import TimeframeSelector from './components/TimeframeSelector';
import ChartControls from './components/ChartControls';
import DataList from './components/DataList';
import BottomTabs from './components/BottomTabs';
import OrderHistory from './components/OrderHistory';

// Import mock data
import { mockOrderBook, mockTrades } from './data/mockData';

function App() {
  const [selectedTab, setSelectedTab] = useState('Open');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7D');

  return (
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}
        >
          <StatsCards />
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}
          >
            <PriceDisplay />
            <CurrencySelector />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 30,
            marginRight: 20,
          }}
        >
          <View style={{ flex: 1, marginRight: 10 }}>
            <CandlestickChart
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
            <DataList title="Order book" data={mockOrderBook} />
            <DataList
              title="Trades"
              data={mockTrades}
              containerStyle={{ marginTop: 20 }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
});

export default App;
