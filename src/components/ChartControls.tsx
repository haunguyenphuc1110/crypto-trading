import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import IconSvg from './IconSvg';

const ChartControls = () => (
  <View style={styles.chartControls}>
    <TouchableOpacity style={styles.controlButton}>
      <Text style={styles.controlButtonText}>H1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.controlButton}>
      <IconSvg name="forward" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.controlButton}>
      <IconSvg name="bolt" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  chartControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginVertical: 15,
  },
  controlButton: {
    backgroundColor: Colors.ACTIVE_COLOR,
    padding: 10,
    borderRadius: 4,
  },
  controlButtonText: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 10,
    fontWeight: '500',
  },
});

export default ChartControls;
