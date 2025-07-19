import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface CurrencySelectorProps {
  pair?: string;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  pair = 'USD/BTC',
}) => (
  <View style={styles.currencyContainer}>
    <Text style={styles.currencyPair}>{pair}</Text>
    <Text style={styles.dropdownIcon}>▼</Text>
  </View>
);

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.CARD_BACKGROUND,
  },
  currencyPair: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  dropdownIcon: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 12,
  },
});

export default CurrencySelector;
