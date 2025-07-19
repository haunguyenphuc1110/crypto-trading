export interface CandleData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface DataItem {
  price: string;
  amount: string;
  type: 'buy' | 'sell';
}
