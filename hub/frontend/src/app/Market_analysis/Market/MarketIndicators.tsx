interface MarketIndicator {
  name: string;
  value: number;
  change: number;
  status: string;
}

interface MarketIndicatorsProps {
  indicators: MarketIndicator[];
  getTrendIcon: (trend: string) => string;
  getChangeColor: (change: number) => string;
}

export default function MarketIndicators({ indicators, getTrendIcon, getChangeColor }: MarketIndicatorsProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">📊 Market Indicators</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {indicators.map((indicator, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-600">{indicator.name}</h3>
              <span className="text-lg">{getTrendIcon(indicator.status)}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{indicator.value}</div>
            <div className={`text-sm ${getChangeColor(indicator.change)}`}>
              {indicator.change >= 0 ? '+' : ''}{indicator.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
