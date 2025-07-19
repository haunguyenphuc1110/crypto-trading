import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface StatsData {
  high: string;
  low: string;
  volumeBTC: string;
  volumeETH: string;
}

interface StatsCardsProps {
  data?: StatsData;
}

const StatsCards: React.FC<StatsCardsProps> = ({
  data = {
    high: '0.00',
    low: '0.00',
    volumeBTC: '0.00',
    volumeETH: '0.00',
  },
}) => (
  <View style={styles.statsContainer}>
    <View style={styles.statRow}>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>High</Text>
        <Text style={styles.statValue}>{data.high}</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={[styles.statLabel, { color: Colors.DANGER }]}>Low</Text>
        <Text style={styles.statValue}>{data.low}</Text>
      </View>
    </View>

    <View style={styles.line} />

    <View style={styles.statRow}>
      <View style={styles.statItem}>
        <Text style={styles.statSubLabel}>Vol (BTC)</Text>
        <Text style={styles.statValue}>{data.volumeBTC}</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statSubLabel}>Vol (ETH)</Text>
        <Text style={styles.statValue}>{data.volumeETH}</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  statsContainer: {
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: 12,
    paddingVertical: 10,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingRight: 20,
  },
  statItem: {
    alignItems: 'center',
    marginLeft: 20,
  },
  statLabel: {
    color: Colors.SUCCESS,
    fontSize: 14,
    fontWeight: '500',
  },
  statValue: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: '600',
  },
  statSubLabel: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 12,
    marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: Colors.SECONDARY_TEXT,
    width: '100%',
    marginVertical: 10,
  },
});

export default StatsCards;
