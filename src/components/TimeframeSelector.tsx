import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface TimeframeSelectorProps {
  selectedTimeframe: string;
  onTimeframeChange: (timeframe: string) => void;
}

const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  selectedTimeframe,
  onTimeframeChange,
}) => {
  const timeframes = ['7D', '1M', '3M', '1Y', '5Y', 'Max'];

  return (
    <View style={styles.timeframeContainer}>
      {timeframes.map((period) => (
        <TouchableOpacity
          key={period}
          style={[
            styles.timeframeButton,
            selectedTimeframe === period && styles.timeframeButtonActive,
          ]}
          onPress={() => onTimeframeChange(period)}
        >
          <Text
            style={[
              styles.timeframeText,
              selectedTimeframe === period && styles.timeframeTextActive,
            ]}
          >
            {period}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  timeframeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  timeframeButton: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: Colors.CARD_BACKGROUND_SECONDARY,
  },
  timeframeButtonActive: {
    backgroundColor: Colors.ACTIVE_COLOR,
  },
  timeframeText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 14,
  },
  timeframeTextActive: {
    color: Colors.PRIMARY_TEXT,
  },
});

export default TimeframeSelector;
