import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

const OrderHistory = () => (
  <View style={styles.orderHistory}>
    <View style={styles.radioButton} />

    <View style={styles.orderHistoryItem}>
      <View style={styles.orderStatus}>
        <Text style={styles.orderType}>Buy</Text>
        <Text style={styles.orderLabel}>Price</Text>
        <Text
          style={styles.orderValueText}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          0.0001230BTC
        </Text>
      </View>

      <View style={styles.orderDetails}>
        <Text style={styles.orderPair}>BTC/ETH</Text>
        <Text style={styles.orderLabel}>Amount</Text>
        <Text
          style={styles.orderValueText}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          0.0001230ETH
        </Text>
      </View>

      <View style={styles.orderAmounts}>
        <Text
          style={styles.orderTimestamp}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Placed 2mins ago
        </Text>
        <Text style={styles.orderLabel}>Executed</Text>
        <Text
          style={styles.orderValueText}
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          0.0000ETH
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  orderHistory: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.CARD_BACKGROUND,
    borderRadius: 8,
    marginLeft: 20,
    padding: 10,
  },
  radioButton: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.PRIMARY_TEXT,
  },
  orderHistoryItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  orderStatus: {
    flex: 1,
    flexShrink: 1,
    alignItems: 'flex-start',
  },
  orderType: {
    color: Colors.SUCCESS,
    fontSize: 12,
  },
  orderDetails: {
    alignItems: 'flex-start',
    flex: 1,
    flexShrink: 1,
  },
  orderPair: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 12,
  },
  orderTimestamp: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 10,
  },
  orderAmounts: {
    alignItems: 'flex-end',
    flex: 1,
    flexShrink: 1,
  },
  orderLabel: {
    color: Colors.SECONDARY_TEXT,
    fontSize: 10,
    marginVertical: 4,
  },
  orderValueText: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 10,
  },
});

export default OrderHistory;
