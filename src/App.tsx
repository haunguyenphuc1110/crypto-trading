import React, { useState } from 'react';
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
  mockCandlestickData,
  mockOrderBook,
  mockTrades,
} from './data/mockData';

function App() {
  const [selectedTab, setSelectedTab] = useState('Open');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7D');

  return (
    <GestureHandlerRootView style={styles.container}>
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
                data={mockCandlestickData}
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
});

export default App;
