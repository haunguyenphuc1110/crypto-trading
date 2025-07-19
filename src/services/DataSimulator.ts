import { CandleData, MarketData, TradeData } from '../types/Chart';

let currentPrice = 0;
let candles: CandleData[] = [];
let trades: TradeData[] = [];
let tradeCounter = 1;

// Timeframe type and configurations
type Timeframe = '7D' | '1M' | '3M' | '1Y' | '5Y' | 'Max';

const timeframeConfigs: Record<
  Timeframe,
  { candleCount: number; intervalMinutes: number }
> = {
  '7D': { candleCount: 7, intervalMinutes: 60 }, // 7 days, 1h candles
  '1M': { candleCount: 30, intervalMinutes: 24 * 60 }, // 1 month, daily candles
  '3M': { candleCount: 90, intervalMinutes: 24 * 60 }, // 3 months, daily candles
  '1Y': { candleCount: 30, intervalMinutes: 7 * 24 * 60 }, // 1 year, weekly candles
  '5Y': { candleCount: 100, intervalMinutes: 30 * 24 * 60 }, // 5 years, monthly candles
  Max: { candleCount: 150, intervalMinutes: 30 * 24 * 60 }, // Max, fallback to monthly candles
};

const initializeData = (timeframe: string = '7D') => {
  const config =
    timeframeConfigs[timeframe as Timeframe] || timeframeConfigs['7D'];
  const now = Date.now();

  candles = [];

  for (let i = config.candleCount - 1; i >= 0; i--) {
    const timestamp = now - i * config.intervalMinutes * 60 * 1000;
    const open = currentPrice + (Math.random() - 0.5) * 200;
    const close = open + (Math.random() - 0.5) * 400;
    const high = Math.max(open, close) + Math.random() * 100;
    const low = Math.min(open, close) - Math.random() * 100;

    candles.push({
      timestamp,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close: Number(close.toFixed(2)),
    });

    currentPrice = close;
  }

  trades = [];
  for (let i = 0; i < 10; i++) {
    trades.push({
      id: (tradeCounter++).toString(),
      price: currentPrice + (Math.random() - 0.5) * 100,
      amount: Number((Math.random() * 0.1).toFixed(4)),
      side: Math.random() > 0.5 ? 'buy' : 'sell',
    });
  }
};

export const generateUpdate = (): MarketData => {
  const updatedCandles = [...candles];
  const lastCandle = updatedCandles[updatedCandles.length - 1];

  if (lastCandle) {
    const priceChange = (Math.random() - 0.5) * 500;
    const newPrice = Math.max(currentPrice + priceChange, 1000);

    const updatedCandle: CandleData = {
      ...lastCandle,
      close: Number(newPrice.toFixed(2)),
      high: Math.max(lastCandle.high, newPrice),
      low: Math.min(lastCandle.low, newPrice),
    };

    updatedCandles[updatedCandles.length - 1] = updatedCandle;
    candles = updatedCandles;
    currentPrice = newPrice;
  }

  const newTrade: TradeData = {
    id: (tradeCounter++).toString(),
    price: currentPrice + (Math.random() - 0.5) * 200,
    amount: Number((Math.random() * 0.1).toFixed(4)),
    side: Math.random() > 0.5 ? 'buy' : 'sell',
  };

  const updatedTrades = [newTrade, ...trades.slice(0, 19)];
  trades = updatedTrades;

  const spread = currentPrice * 0.002;
  const bids = Array.from({ length: 10 }, (_, i) => ({
    price: Number((currentPrice - spread * (i + 1)).toFixed(2)),
    amount: Number((Math.random() * 0.5).toFixed(4)),
  }));

  const asks = Array.from({ length: 10 }, (_, i) => ({
    price: Number((currentPrice + spread * (i + 1)).toFixed(2)),
    amount: Number((Math.random() * 0.5).toFixed(4)),
  }));

  return {
    candles: [...candles],
    trades: [...trades],
    orderBook: { bids, asks },
    currentPrice,
  };
};

export const getInitialData = (timeframe: string = '7D'): MarketData => {
  initializeData(timeframe);
  return generateUpdate();
};

// Generate new data for timeframe change
export const generateTimeframeData = (timeframe: string): MarketData => {
  initializeData(timeframe);
  return generateUpdate();
};
