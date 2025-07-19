import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface BottomTabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const BottomTabs: React.FC<BottomTabsProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const tabs = ['Open', 'Filled', 'Cancelled'];

  return (
    <View style={styles.bottomTabs}>
      {tabs.map((tab) => {
        const isActive = selectedTab === tab;

        return (
          <TouchableOpacity
            key={tab}
            style={styles.tabButton}
            onPress={() => onTabChange(tab)}
          >
            <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
              {tab}
            </Text>

            {isActive && <View style={styles.tabIndicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 5,
    marginLeft: 20,
  },
  tabButton: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 6,
  },
  tabText: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: Colors.ACTIVE_COLOR,
  },
  tabIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ACTIVE_COLOR,
    marginTop: 4,
  },
});

export default BottomTabs;
