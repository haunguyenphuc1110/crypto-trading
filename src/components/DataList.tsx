import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

interface DataItem {
  price: string;
  amount: string;
  type: 'buy' | 'sell';
}

interface DataListProps {
  title: string;
  data: DataItem[];
  containerStyle?: object;
}

const DataList: React.FC<DataListProps> = ({ title, data, containerStyle }) => (
  <View style={[styles.section, containerStyle]}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <View>
      {data.map((item, index) => (
        <View key={index} style={styles.dataRow}>
          <Text
            style={[
              styles.dataPrice,
              {
                color: item.type === 'buy' ? Colors.SUCCESS : Colors.DANGER,
              },
            ]}
          >
            {item.price}
          </Text>
          <Text style={styles.dataAmount}>{item.amount}</Text>
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  section: {
    alignItems: 'center',
  },
  sectionTitle: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  dataPrice: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 20,
  },
  dataAmount: {
    color: Colors.PRIMARY_TEXT,
    fontSize: 12,
  },
});

export default DataList;
