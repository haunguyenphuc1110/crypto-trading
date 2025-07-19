import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartesianChart, Line } from 'victory-native';
import { Colors } from '../constants/colors';
import TimeframeSelector from './TimeframeSelector';
import ChartControls from './ChartControls';
import { SCREEN_HEIGHT } from '../styles/dimensions';

// Mock price data for line chart demonstration
const mockPriceData = [
  { day: 1, price: 20.48 },
  { day: 2, price: 21.25 },
  { day: 3, price: 22.1 },
  { day: 4, price: 21.85 },
  { day: 5, price: 23.45 },
  { day: 6, price: 24.2 },
  { day: 7, price: 23.9 },
  { day: 8, price: 25.15 },
  { day: 9, price: 26.3 },
  { day: 10, price: 25.85 },
  { day: 11, price: 27.2 },
  { day: 12, price: 26.95 },
  { day: 13, price: 28.4 },
  { day: 14, price: 29.15 },
  { day: 15, price: 28.75 },
];

interface CandlestickChartProps {
  data?: Array<{
    day: number;
    price: number;
  }>;
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({
  data = mockPriceData,
  selectedTimeframe,
  setSelectedTimeframe,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chartArea}>
        <CartesianChart
          data={data}
          xKey="day"
          yKeys={['price']}
          axisOptions={{
            lineColor: Colors.CHART_AXIS,
            labelColor: Colors.CHART_AXIS,
          }}
        >
          {({ points }) => (
            <Line
              points={points.price}
              color={Colors.SUCCESS}
              strokeWidth={2}
              curveType="natural"
            />
          )}
        </CartesianChart>
      </View>

      <TimeframeSelector
        selectedTimeframe={selectedTimeframe}
        onTimeframeChange={setSelectedTimeframe}
      />
      <ChartControls />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    padding: 10,
  },
  chartArea: {
    height: SCREEN_HEIGHT / 3,
  },
});

export default CandlestickChart;
