import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface PriceDisplayProps {
  price?: string;
  change?: string;
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({
  price = '$66,360.55',
  change = '(+1.25%)',
}) => (
  <View style={styles.priceContainer}>
    <Text style={styles.mainPrice}>{price}</Text>
    <Text style={styles.priceChange}>{change}</Text>
  </View>
);

const styles = StyleSheet.create({
  priceContainer: {
    alignItems: 'flex-end',
  },
  mainPrice: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 24,
    fontWeight: 'bold',
  },
  priceChange: {
    color: Colors.PERCENTAGE_COLOR,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default PriceDisplay;
