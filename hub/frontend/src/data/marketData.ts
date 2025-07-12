export const timeframes = ["1D", "1W", "1M", "3M", "6M", "1Y"];

export const commodities = [
  { id: "rice", name: "Rice", symbol: "RCE", icon: "🌾" },
  { id: "corn", name: "Corn", symbol: "CRN", icon: "🌽" },
  { id: "coconut", name: "Coconut", symbol: "CCT", icon: "🥥" },
  { id: "banana", name: "Banana", symbol: "BNN", icon: "🍌" },
  { id: "sugarcane", name: "Sugarcane", symbol: "SGC", icon: "🌿" },
  { id: "coffee", name: "Coffee", symbol: "CFE", icon: "☕" },
];

export const marketData = {
  rice: {
    currentPrice: 22.75,
    change: +1.25,
    changePercent: +5.82,
    volume: "2.4M tons",
    marketCap: "₱45.2B",
    high52Week: 28.5,
    low52Week: 18.3,
    trend: "bullish",
  },
  corn: {
    currentPrice: 18.4,
    change: -0.85,
    changePercent: -4.42,
    volume: "3.8M tons",
    marketCap: "₱38.7B",
    high52Week: 22.8,
    low52Week: 15.6,
    trend: "bearish",
  },
  coconut: {
    currentPrice: 15.9,
    change: +0.65,
    changePercent: +4.26,
    volume: "1.6M nuts",
    marketCap: "₱28.9B",
    high52Week: 18.45,
    low52Week: 12.8,
    trend: "bullish",
  },
  banana: {
    currentPrice: 45.2,
    change: +2.85,
    changePercent: +6.73,
    volume: "1.9M tons",
    marketCap: "₱52.8B",
    high52Week: 52.7,
    low52Week: 38.4,
    trend: "bullish",
  },
  sugarcane: {
    currentPrice: 1250.45,
    change: -25.25,
    changePercent: -1.98,
    volume: "0.8M tons",
    marketCap: "₱15.6B",
    high52Week: 1450.3,
    low52Week: 1120.2,
    trend: "bearish",
  },
  coffee: {
    currentPrice: 185.78,
    change: +8.92,
    changePercent: +5.05,
    volume: "2.1M tons",
    marketCap: "₱18.4B",
    high52Week: 215.15,
    low52Week: 158.9,
    trend: "bullish",
  },
};

export const marketInsights = [
  {
    id: 1,
    title: "Rice Prices Surge Due to Typhoon Season Impact",
    summary:
      "Rice prices have increased 6% this week due to flooding in Central Luzon and Cagayan Valley affecting major rice producing areas.",
    impact: "High",
    category: "Weather Impact",
    timestamp: "2025-07-08T10:30:00Z",
    confidence: 92,
  },
  {
    id: 2,
    title: "Banana Export Market Shows Strong Recovery",
    summary:
      "Philippine banana exports to Japan and Korea are experiencing strong demand with harvest season in Davao and Bukidnon.",
    impact: "Medium",
    category: "Export Growth",
    timestamp: "2025-07-08T08:15:00Z",
    confidence: 78,
  },
  {
    id: 3,
    title: "Record Coconut Oil Demand from International Markets",
    summary:
      "Unprecedented demand from European and US markets is driving coconut oil prices to near-record levels in Quezon and Laguna.",
    impact: "High",
    category: "Export Demand",
    timestamp: "2025-07-08T06:45:00Z",
    confidence: 89,
  },
];

export const regionalPrices = [
  {
    region: "Central Luzon",
    commodity: "Rice",
    price: "₱22.50/kg",
    change: "+₱1.20",
    trend: "up",
    lastUpdated: "2 hours ago",
  },
  {
    region: "Cagayan Valley",
    commodity: "Corn",
    price: "₱18.75/kg",
    change: "+₱0.85",
    trend: "up",
    lastUpdated: "1 hour ago",
  },
  {
    region: "Davao Region",
    commodity: "Banana",
    price: "₱45.00/kg",
    change: "+₱2.50",
    trend: "up",
    lastUpdated: "3 hours ago",
  },
  {
    region: "Bicol Region",
    commodity: "Coconut",
    price: "₱15.25/nut",
    change: "-₱0.75",
    trend: "down",
    lastUpdated: "4 hours ago",
  },
];

export const marketIndicators = [
  { name: "Commodity Index", value: 1245.67, change: +2.34, status: "bullish" },
  { name: "Food Security Index", value: 87.4, change: -1.2, status: "stable" },
  { name: "Supply Chain Health", value: 92.1, change: +0.8, status: "bullish" },
  { name: "Weather Risk Factor", value: 34.5, change: +5.2, status: "bearish" },
];

export const priceAlerts = [
  {
    id: 1,
    commodity: "Rice",
    alertType: "Price Target",
    message: "Rice has reached your target price of ₱22.50/kg",
    severity: "info",
    timestamp: "5 min ago",
  },
  {
    id: 2,
    commodity: "Coconut",
    alertType: "Volatility Alert",
    message: "Coconut showing unusual volatility - consider position review",
    severity: "warning",
    timestamp: "15 min ago",
  },
];
