export interface DataItem {
  price: string;
  amount: string;
  type: 'buy' | 'sell';
}

export const mockOrderBook: DataItem[] = [
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
];

export const mockTrades: DataItem[] = [
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'buy' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
  { price: '253.11', amount: '0.001', type: 'sell' },
];
