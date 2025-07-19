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

export interface TradeData {
  id: string;
  price: number;
  amount: number;
  side: 'buy' | 'sell';
}

export interface OrderBookData {
  bids: {
    price: number;
    amount: number;
  }[];
  asks: { price: number; amount: number }[];
}

export interface MarketData {
  candles: CandleData[];
  trades: TradeData[];
  orderBook: OrderBookData;
  currentPrice: number;
}
