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

export default function MarketIndicators({
  indicators,
  getTrendIcon,
  getChangeColor,
}: MarketIndicatorsProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg">
          <span className="text-white text-xl">📊</span>
        </div>
        <h2 className="text-3xl font-bold gradient-text">Market Indicators</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {indicators.map((indicator, index) => (
          <div
            key={index}
            className="modern-card p-6 group animate-pulse-hover"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                {indicator.name}
              </h3>
              <div className="p-2 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
                <span className="text-lg">
                  {getTrendIcon(indicator.status)}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                {typeof indicator.value === "number"
                  ? indicator.value.toLocaleString()
                  : indicator.value}
              </div>

              <div className="flex items-center justify-between">
                <div
                  className={`text-sm font-semibold flex items-center gap-1 ${getChangeColor(
                    indicator.change
                  )}`}
                >
                  <span className={indicator.change >= 0 ? "↗️" : "↘️"}>
                    {indicator.change >= 0 ? "↗️" : "↘️"}
                  </span>
                  {indicator.change >= 0 ? "+" : ""}
                  {indicator.change}%
                </div>

                <div
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    indicator.status === "bullish"
                      ? "bg-green-100 text-green-800"
                      : indicator.status === "bearish"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {indicator.status}
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
              <div
                className={`h-1 rounded-full transition-all duration-1000 ${
                  indicator.change >= 0 ? "bg-green-500" : "bg-red-500"
                }`}
                style={{
                  width: `${Math.min(Math.abs(indicator.change) * 10, 100)}%`,
                  animationDelay: `${index * 0.2}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
