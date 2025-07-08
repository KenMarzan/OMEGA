export const timeframes = ['1D', '1W', '1M', '3M', '6M', '1Y'];

export const commodities = [
  { id: 'wheat', name: 'Wheat', symbol: 'WHT', icon: '🌾' },
  { id: 'corn', name: 'Corn', symbol: 'CRN', icon: '🌽' },
  { id: 'rice', name: 'Rice', symbol: 'RCE', icon: '🍚' },
  { id: 'soybeans', name: 'Soybeans', symbol: 'SOY', icon: '🫘' },
  { id: 'cotton', name: 'Cotton', symbol: 'CTN', icon: '🌺' },
  { id: 'sugar', name: 'Sugar', symbol: 'SGR', icon: '🍯' }
];

export const marketData = {
  wheat: {
    currentPrice: 652.75,
    change: +15.25,
    changePercent: +2.39,
    volume: '2.4M tons',
    marketCap: '$45.2B',
    high52Week: 698.50,
    low52Week: 485.30,
    trend: 'bullish'
  },
  corn: {
    currentPrice: 398.40,
    change: -8.15,
    changePercent: -2.01,
    volume: '3.8M tons',
    marketCap: '$38.7B',
    high52Week: 445.80,
    low52Week: 325.60,
    trend: 'bearish'
  },
  rice: {
    currentPrice: 287.90,
    change: +4.35,
    changePercent: +1.53,
    volume: '1.6M tons',
    marketCap: '$28.9B',
    high52Week: 312.45,
    low52Week: 245.80,
    trend: 'bullish'
  },
  soybeans: {
    currentPrice: 1156.20,
    change: +23.85,
    changePercent: +2.11,
    volume: '1.9M tons',
    marketCap: '$52.8B',
    high52Week: 1245.70,
    low52Week: 978.40,
    trend: 'bullish'
  },
  cotton: {
    currentPrice: 78.45,
    change: -1.25,
    changePercent: -1.57,
    volume: '0.8M bales',
    marketCap: '$15.6B',
    high52Week: 89.30,
    low52Week: 65.20,
    trend: 'bearish'
  },
  sugar: {
    currentPrice: 45.78,
    change: +0.92,
    changePercent: +2.05,
    volume: '2.1M tons',
    marketCap: '$18.4B',
    high52Week: 52.15,
    low52Week: 38.90,
    trend: 'bullish'
  }
};

export const marketInsights = [
  {
    id: 1,
    title: 'Wheat Futures Surge on Global Supply Concerns',
    summary: 'Wheat prices have increased 15% this week due to drought conditions in major producing regions and export restrictions.',
    impact: 'High',
    category: 'Price Movement',
    timestamp: '2025-07-08T10:30:00Z',
    confidence: 92
  },
  {
    id: 2,
    title: 'Corn Market Shows Seasonal Correction',
    summary: 'Corn futures are experiencing typical summer volatility with harvest season approaching in the Southern Hemisphere.',
    impact: 'Medium',
    category: 'Seasonal Trend',
    timestamp: '2025-07-08T08:15:00Z',
    confidence: 78
  },
  {
    id: 3,
    title: 'Record Soybean Demand from Asian Markets',
    summary: 'Unprecedented demand from China and India is driving soybean prices to near-record levels.',
    impact: 'High',
    category: 'Demand Surge',
    timestamp: '2025-07-08T06:45:00Z',
    confidence: 89
  }
];

export const regionalPrices = [
  {
    region: 'Midwest USA',
    commodity: 'Corn',
    price: '$4.25/bushel',
    change: '+$0.12',
    trend: 'up',
    lastUpdated: '2 hours ago'
  },
  {
    region: 'Great Plains',
    commodity: 'Wheat',
    price: '$6.85/bushel',
    change: '+$0.35',
    trend: 'up',
    lastUpdated: '1 hour ago'
  },
  {
    region: 'Southeast Asia',
    commodity: 'Rice',
    price: '$425/ton',
    change: '+$8',
    trend: 'up',
    lastUpdated: '3 hours ago'
  },
  {
    region: 'Brazil',
    commodity: 'Soybeans',
    price: '$520/ton',
    change: '-$12',
    trend: 'down',
    lastUpdated: '4 hours ago'
  }
];

export const marketIndicators = [
  { name: 'Commodity Index', value: 1245.67, change: +2.34, status: 'bullish' },
  { name: 'Food Security Index', value: 87.4, change: -1.2, status: 'stable' },
  { name: 'Supply Chain Health', value: 92.1, change: +0.8, status: 'bullish' },
  { name: 'Weather Risk Factor', value: 34.5, change: +5.2, status: 'bearish' }
];

export const priceAlerts = [
  {
    id: 1,
    commodity: 'Wheat',
    alertType: 'Price Target',
    message: 'Wheat has reached your target price of $650/ton',
    severity: 'info',
    timestamp: '5 min ago'
  },
  {
    id: 2,
    commodity: 'Corn',
    alertType: 'Volatility Alert',
    message: 'Corn showing unusual volatility - consider position review',
    severity: 'warning',
    timestamp: '15 min ago'
  }
];
