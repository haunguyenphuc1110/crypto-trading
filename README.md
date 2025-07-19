# 📱 Crypto Trading App

A modern, real-time cryptocurrency trading application built with React Native. Features live market data, interactive charts, and a sleek dark theme optimized for both iOS and Android.

### iOS Screenshot

<img width="370" height="804" alt="Simulator Screenshot - iPhone 15 - 2025-07-19 at 13 28 32" src="https://github.com/user-attachments/assets/eea2564f-9d3c-4d78-8d81-55fc4a277f9e" />

---

### Android Screenshot

<img width="370" height="804" alt="Screenshot_20250719_131654" src="https://github.com/user-attachments/assets/1ada5d57-ee97-4461-a1f3-7ed8e878ab79" />

## 🎥 Demo Videos

### Android Demo

[Android Demo](https://github.com/haunguyenphuc1110/crypto-trading/blob/main/android_demo.webm)

### iOS Demo

[IOS Demo](https://github.com/haunguyenphuc1110/crypto-trading/blob/main/ios_demo.mp4)

_Demo videos are located in the main folder_

## ✨ Features

### 📊 **Real-time Market Data**

- Live price updates every 5 seconds
- Real-time candlestick charts with multiple timeframes (7D, 1M, 3M, 1Y, 5Y, Max)
- Interactive charts with crosshair and tooltips
- Custom grid overlay and Y-axis labels

### 💹 **Trading Interface**

- Order book with live bid/ask data
- Recent trades feed with buy/sell indicators
- Multiple cryptocurrency pairs (BTC, ETH, BNB, ADA, SOL, etc.)
- Dropdown currency selector with smooth animations

### 📈 **Advanced Charts**

- Wagmi candlestick charts with zoom and pan
- Custom highlighting and color coding
- Responsive design for different screen sizes
- Performance-optimized rendering

## 🛠 Tech Stack

- **React Native** - Cross-platform mobile framework
- **TypeScript** - Type safety and developer experience
- **react-native-wagmi-charts** - Advanced charting library
- **@gorhom/portal** - Portal management for overlays
- **React Native Gesture Handler** - Native gesture support
- **Vector Graphics** - Custom SVG icons and components

## 🚀 Getting Started

### Prerequisites

Make sure you have completed the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment).

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/crypto-trading.git
   cd crypto-trading
   ```

2. **Install dependencies**

   ```bash
   # Using npm
   npm install

   # OR using Yarn
   yarn install
   ```

3. **iOS Setup** (iOS only)

   ```bash
   # Install Ruby dependencies
   bundle install

   # Install CocoaPods dependencies
   cd ios && bundle exec pod install && cd ..
   ```

### Running the App

1. **Start Metro Bundler**

   ```bash
   # Using npm
   npm start

   # OR using Yarn
   yarn start
   ```

2. **Run on Android**

   ```bash
   # Using npm
   npm run android

   # OR using Yarn
   yarn android
   ```

3. **Run on iOS**

   ```bash
   # Using npm
   npm run ios

   # OR using Yarn
   yarn ios
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CandlestickChart.tsx
│   ├── CurrencySelector.tsx
│   ├── Dropdown.tsx
│   ├── DataList.tsx
│   └── ...
├── services/            # Business logic and data
│   └── DataSimulator.ts
├── utils/              # Helper functions
│   └── dataHelpers.ts
├── types/              # TypeScript definitions
├── constants/          # App constants and colors
├── styles/             # Style definitions
└── assets/             # Static assets
```

## 🎯 Key Components

### Real-time Data Simulation

- **DataSimulator**: Generates realistic market data
- **Live Updates**: Updates every 5 seconds with price movements
- **Timeframe Support**: Different data granularity for each timeframe

### Interactive Charts

- **CandlestickChart**: Main chart component with Wagmi integration
- **ChartGrid**: Optimized grid overlay using SVG paths
- **ChartYAxisLabels**: Custom price labels with highlighting

### Trading Interface

- **DataList**: Displays order book and trades
- **CurrencySelector**: Dropdown for pair selection
- **PriceDisplay**: Live price with change indicators
