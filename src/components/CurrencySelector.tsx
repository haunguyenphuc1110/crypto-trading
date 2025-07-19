import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';
import Dropdown, { DropdownOption } from './Dropdown';

const CurrencySelector = () => {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');

  // Sample cryptocurrency trading pairs
  const currencyOptions: DropdownOption[] = [
    { label: 'BTC/USDT', value: 'BTC/USDT' },
    { label: 'ETH/USDT', value: 'ETH/USDT' },
    { label: 'BNB/USDT', value: 'BNB/USDT' },
    { label: 'ADA/USDT', value: 'ADA/USDT' },
    { label: 'SOL/USDT', value: 'SOL/USDT' },
  ];

  const handlePairChange = (option: DropdownOption) => {
    setSelectedPair(option.value);
  };

  const renderOptionItem = (
    option: DropdownOption,
    closeDropdown: () => void
  ) => {
    const isSelected = selectedPair === option.value;

    return (
      <TouchableOpacity
        key={option.value}
        style={styles.optionItem}
        onPress={() => {
          handlePairChange(option);
          closeDropdown();
        }}
      >
        <Text
          style={[styles.optionText, isSelected && styles.selectedOptionText]}
        >
          {option.label}
        </Text>
        {isSelected && <Text style={styles.checkMark}>✓</Text>}
      </TouchableOpacity>
    );
  };

  return (
    <Dropdown
      options={currencyOptions}
      onValueChange={handlePairChange}
      withOverlay={true}
      dropdownContainerStyle={styles.dropdownList}
      onRenderOptionItem={renderOptionItem}
    >
      <View style={styles.currencyContainer}>
        <Text style={styles.currencyPair}>{selectedPair}</Text>
        <Text style={styles.dropdownIcon}>▼</Text>
      </View>
    </Dropdown>
  );
};

const styles = StyleSheet.create({
  currencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    backgroundColor: Colors.CARD_BACKGROUND,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_TEXT,
  },
  currencyPair: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  dropdownIcon: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 12,
  },
  dropdownList: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.SECONDARY_TEXT,
    maxHeight: 300,
    paddingVertical: 4,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  optionText: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: '500',
  },
  selectedOptionText: {
    color: Colors.SUCCESS,
    fontWeight: '600',
  },
  checkMark: {
    color: Colors.SUCCESS,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurrencySelector;
