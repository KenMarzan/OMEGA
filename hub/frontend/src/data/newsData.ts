export const tabs = [
  { id: 'all', name: 'All News', icon: '📰' },
  { id: 'alerts', name: 'Urgent Alerts', icon: '🚨' },
  { id: 'weather', name: 'Weather', icon: '🌤️' },
  { id: 'market', name: 'Market Updates', icon: '📈' },
  { id: 'government', name: 'Government', icon: '🏛️' },
  { id: 'technology', name: 'AgTech News', icon: '💻' }
];

export const urgentAlerts = [
  {
    id: 1,
    type: 'weather',
    severity: 'high',
    title: 'Severe Weather Warning - Central Valley',
    message: 'Heavy rainfall and possible flooding expected in the next 48 hours. Secure livestock and equipment.',
    location: 'Central Valley, CA',
    timestamp: '2025-07-08T10:30:00Z',
    validUntil: '2025-07-10T18:00:00Z',
    source: 'National Weather Service'
  },
  {
    id: 2,
    type: 'disease',
    severity: 'medium',
    title: 'Crop Disease Alert - Late Blight Detected',
    message: 'Late blight has been confirmed in potato crops in nearby counties. Implement preventive measures immediately.',
    location: 'Northern Plains',
    timestamp: '2025-07-08T08:15:00Z',
    validUntil: '2025-07-15T23:59:00Z',
    source: 'Agricultural Extension Office'
  },
  {
    id: 3,
    type: 'market',
    severity: 'low',
    title: 'Commodity Price Surge - Wheat Futures Up 15%',
    message: 'Wheat futures have increased significantly due to supply chain disruptions. Consider market timing strategies.',
    location: 'National',
    timestamp: '2025-07-08T06:45:00Z',
    validUntil: '2025-07-12T17:00:00Z',
    source: 'USDA Market News'
  }
];

export const newsArticles = [
  {
    id: 1,
    category: 'technology',
    title: 'Revolutionary AI System Predicts Crop Yields with 98% Accuracy',
    excerpt: 'New machine learning algorithm developed by AgriTech Solutions can predict harvest outcomes weeks in advance, helping farmers optimize resource allocation.',
    content: 'A groundbreaking artificial intelligence system has been developed that can predict crop yields with unprecedented accuracy...',
    author: 'Dr. Sarah Mitchell',
    publication: 'Agricultural Technology Today',
    publishedAt: '2025-07-08T09:00:00Z',
    readTime: '5 min read',
    image: '🤖',
    tags: ['AI', 'Machine Learning', 'Crop Prediction'],
    likes: 342,
    shares: 89
  },
  {
    id: 2,
    category: 'market',
    title: 'Global Food Prices Show Steady Decline Amid Record Harvests',
    excerpt: 'International food commodity prices have dropped 8% this quarter as multiple regions report bumper crop yields despite earlier climate concerns.',
    content: 'The FAO Food Price Index has shown a consistent downward trend over the past three months...',
    author: 'Michael Chen',
    publication: 'Global Agriculture Report',
    publishedAt: '2025-07-08T07:30:00Z',
    readTime: '7 min read',
    image: '📊',
    tags: ['Market Analysis', 'Food Prices', 'Global Trade'],
    likes: 278,
    shares: 156
  },
  {
    id: 3,
    category: 'government',
    title: 'New Farm Subsidies Program Launched for Small-Scale Farmers',
    excerpt: 'The government announces a $2.5 billion initiative to support small and medium-sized farming operations with grants and low-interest loans.',
    content: 'The Department of Agriculture has unveiled a comprehensive support package aimed at strengthening small farming communities...',
    author: 'Jennifer Lopez',
    publication: 'Government Agricultural Bulletin',
    publishedAt: '2025-07-08T06:00:00Z',
    readTime: '6 min read',
    image: '🏛️',
    tags: ['Government Policy', 'Farm Subsidies', 'Small Farmers'],
    likes: 512,
    shares: 234
  },
  {
    id: 4,
    category: 'weather',
    title: 'Climate-Resilient Crops Show Promise in Drought-Prone Regions',
    excerpt: 'Field trials of drought-resistant corn and soybean varieties demonstrate 40% better survival rates in water-stressed conditions.',
    content: 'Agricultural researchers have achieved a major breakthrough in developing climate-resilient crop varieties...',
    author: 'Dr. Robert Kim',
    publication: 'Climate Agriculture Journal',
    publishedAt: '2025-07-07T14:20:00Z',
    readTime: '8 min read',
    image: '🌾',
    tags: ['Climate Change', 'Drought Resistance', 'Crop Research'],
    likes: 445,
    shares: 178
  },
  {
    id: 5,
    category: 'technology',
    title: 'Drone Technology Revolutionizes Pest Control in Agriculture',
    excerpt: 'Advanced drones equipped with precision spraying systems reduce pesticide use by 60% while improving crop protection effectiveness.',
    content: 'The latest generation of agricultural drones is transforming how farmers approach pest management...',
    author: 'Lisa Zhang',
    publication: 'Future Farming Tech',
    publishedAt: '2025-07-07T11:45:00Z',
    readTime: '4 min read',
    image: '🚁',
    tags: ['Drones', 'Pest Control', 'Precision Agriculture'],
    likes: 389,
    shares: 123
  },
  {
    id: 6,
    category: 'market',
    title: 'Organic Food Market Reaches Record $75 Billion Globally',
    excerpt: 'Consumer demand for organic products continues to surge, with organic farming operations expanding by 25% year-over-year.',
    content: 'The global organic food market has achieved unprecedented growth, reaching a historic milestone...',
    author: 'Anna Peterson',
    publication: 'Organic Market Weekly',
    publishedAt: '2025-07-07T09:15:00Z',
    readTime: '6 min read',
    image: '🌱',
    tags: ['Organic Farming', 'Market Growth', 'Consumer Trends'],
    likes: 367,
    shares: 201
  }
];

export const weatherUpdates = [
  {
    id: 1,
    location: 'Midwest Region',
    condition: 'Partly Cloudy',
    temperature: '78°F',
    humidity: '65%',
    windSpeed: '12 mph',
    precipitation: '20%',
    forecast: 'Ideal conditions for fieldwork and harvesting operations',
    alertLevel: 'normal',
    icon: '⛅'
  },
  {
    id: 2,
    location: 'West Coast',
    condition: 'Sunny',
    temperature: '85°F',
    humidity: '45%',
    windSpeed: '8 mph',
    precipitation: '5%',
    forecast: 'Perfect weather for irrigation and crop monitoring',
    alertLevel: 'normal',
    icon: '☀️'
  },
  {
    id: 3,
    location: 'Southeast Region',
    condition: 'Thunderstorms',
    temperature: '82°F',
    humidity: '85%',
    windSpeed: '18 mph',
    precipitation: '85%',
    forecast: 'Heavy rainfall expected - secure equipment and livestock',
    alertLevel: 'warning',
    icon: '⛈️'
  }
];
