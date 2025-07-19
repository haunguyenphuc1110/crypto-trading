import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';
import IconSvg from './IconSvg';

const Header = () => (
  <View style={styles.header}>
    <TouchableOpacity>
      <IconSvg name="menu" size={24} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Trading Details</Text>
    <TouchableOpacity>
      <IconSvg name="notification" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: Colors.PRIMARY_BACKGROUND,
  },

  headerTitle: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Header;
