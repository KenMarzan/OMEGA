interface MarketInsight {
  id: number;
  title: string;
  summary: string;
  impact: string;
  category: string;
  timestamp: string;
  confidence: number;
}

interface RegionalPrice {
  region: string;
  commodity: string;
  price: string;
  change: string;
  trend: string;
  lastUpdated: string;
}

interface MarketSidebarProps {
  marketInsights: MarketInsight[];
  regionalPrices: RegionalPrice[];
}

export default function MarketSidebar({ marketInsights, regionalPrices }: MarketSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">🔍 Market Insights</h3>
        <div className="space-y-4">
          {marketInsights.map((insight) => (
            <div key={insight.id} className="border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs px-2 py-1 rounded ${
                  insight.impact === 'High' ? 'bg-red-100 text-red-800' :
                  insight.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {insight.impact} Impact
                </span>
                <span className="text-xs text-gray-500">{insight.confidence}% confidence</span>
              </div>
              <h4 className="font-semibold text-sm mb-2">{insight.title}</h4>
              <p className="text-xs text-gray-600">{insight.summary}</p>
              <div className="text-xs text-gray-500 mt-2">{insight.category}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">🌍 Regional Prices</h3>
        <div className="space-y-3">
          {regionalPrices.map((region, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <div>
                <div className="font-medium text-sm">{region.region}</div>
                <div className="text-xs text-gray-600">{region.commodity}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{region.price}</div>
                <div className={`text-xs ${region.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {region.change} {region.trend === 'up' ? '↗️' : '↘️'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
