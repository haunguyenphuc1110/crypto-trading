import { DataItem, MarketData } from '../types/Chart';

// Convert market data to DataItem format for components
export const convertToDataItems = (
  marketData: MarketData | null,
  type: 'orderbook' | 'trades'
): DataItem[] => {
  if (!marketData) return [];

  if (type === 'orderbook') {
    const asks = marketData.orderBook.asks.slice(0, 6).map((ask) => ({
      price: ask.price.toFixed(2),
      amount: ask.amount.toFixed(4),
      type: 'sell' as const,
    }));

    const bids = marketData.orderBook.bids.slice(0, 6).map((bid) => ({
      price: bid.price.toFixed(2),
      amount: bid.amount.toFixed(4),
      type: 'buy' as const,
    }));

    return [...asks, ...bids];
  }

  // trades
  return marketData.trades.map((trade) => ({
    price: trade.price.toFixed(2),
    amount: trade.amount.toFixed(4),
    type: trade.side === 'buy' ? ('buy' as const) : ('sell' as const),
  }));
};

// Calculate price change percentage
export const calculatePriceChange = (
  current: number,
  previous: number
): string => {
  const change = ((current - previous) / previous) * 100;
  const sign = change >= 0 ? '+' : '';
  return `(${sign}${change.toFixed(2)}%)`;
};

// Format price with currency symbol and proper decimals
export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

// Convert market data to StatsCards format
export const formatStatsData = (marketData: MarketData | null) => {
  if (!marketData) {
    return {
      high: '0.00',
      low: '0.00',
      volumeBTC: '0.00',
      volumeETH: '0.00',
    };
  }

  // Calculate high and low from candles
  const prices = marketData.candles.flatMap((candle) => [
    candle.high,
    candle.low,
  ]);
  const high = Math.max(...prices);
  const low = Math.min(...prices);

  // Use current price as volume base (for demo purposes)
  const volumeBTC = marketData.currentPrice * 0.8; // Simulate BTC volume
  const volumeETH = marketData.currentPrice * 0.6; // Simulate ETH volume

  return {
    high: high.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    low: low.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    volumeBTC: volumeBTC.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    volumeETH: volumeETH.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
  };
};
