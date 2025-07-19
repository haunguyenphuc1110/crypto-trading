import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import { CandleData } from '../types/Chart';

interface ChartYAxisLabelsProps {
  data: CandleData[];
  height: number;
  labelCount?: number;
}

const ChartYAxisLabels: React.FC<ChartYAxisLabelsProps> = ({
  data,
  height,
  labelCount = 10,
}) => {
  const { minPrice, maxPrice, priceStep } = useMemo(() => {
    const allPrices = data.flatMap((item) => [
      item.open,
      item.high,
      item.low,
      item.close,
    ]);
    const min = Math.min(...allPrices);
    const max = Math.max(...allPrices);
    const step = (max - min) / (labelCount - 1);
    return {
      minPrice: min,
      maxPrice: max,
      priceStep: step,
    };
  }, [data, labelCount]);

  const labels = useMemo(() => {
    return Array.from({ length: labelCount }, (_, i) => {
      const price = minPrice + priceStep * i;
      const yPosition = height - i * (height / (labelCount - 1));
      return {
        price,
        yPosition: Math.max(0, Math.min(height - 10, yPosition)),
      };
    });
  }, [minPrice, priceStep, height, labelCount]);

  return (
    <View style={styles.yAxisContainer}>
      {labels.map((label, index) => (
        <Text key={index} style={[styles.yAxisLabel, { top: label.yPosition }]}>
          ${label.price.toFixed(2)}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  yAxisContainer: {
    width: 40,
    height: '100%',
    paddingLeft: 8,
    position: 'relative',
  },
  yAxisLabel: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 9, // Smaller font to fit more labels
    fontWeight: '500',
    textAlign: 'left',
    position: 'absolute',
    left: 0,
    lineHeight: 12, // Tight line height for better spacing
  },
});

export default ChartYAxisLabels;
