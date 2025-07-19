import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CandlestickChart as WagmiCandlestickChart } from 'react-native-wagmi-charts';
import { Colors } from '../constants/colors';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../styles/dimensions';
import { CandleData } from '../types/Chart';
import ChartControls from './ChartControls';
import ChartGrid from './ChartGrid';
import ChartYAxisLabels from './ChartYAxisLabels';
import TimeframeSelector from './TimeframeSelector';

interface CandlestickChartProps {
  data: CandleData[];
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({
  data,
  selectedTimeframe,
  setSelectedTimeframe,
}) => {
  const chartWidth = SCREEN_WIDTH * 0.6;
  const chartHeight = SCREEN_HEIGHT / 3;

  return (
    <View style={styles.container}>
      <View style={styles.chartArea}>
        <View style={styles.chartWrapper}>
          <ChartGrid width={chartWidth} height={chartHeight} />
          <WagmiCandlestickChart.Provider data={data}>
            <WagmiCandlestickChart height={chartHeight} width={chartWidth}>
              <WagmiCandlestickChart.Candles
                positiveColor={Colors.SUCCESS}
                negativeColor={Colors.DANGER}
              />
              <WagmiCandlestickChart.Crosshair color={Colors.SUCCESS}>
                <WagmiCandlestickChart.Tooltip
                  style={{
                    backgroundColor: Colors.TOOLTIP_COLOR,
                    borderRadius: 20,
                    paddingVertical: -20,
                  }}
                  textStyle={{
                    color: Colors.PRIMARY_TEXT,
                    fontSize: 10,
                  }}
                />
              </WagmiCandlestickChart.Crosshair>
            </WagmiCandlestickChart>
          </WagmiCandlestickChart.Provider>
        </View>

        <ChartYAxisLabels data={data} height={chartHeight} />
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
    position: 'relative',
    flexDirection: 'row',
  },
  chartWrapper: {
    flex: 1,
    position: 'relative',
  },
});

export default CandlestickChart;
