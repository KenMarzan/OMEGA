interface Commodity {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

interface CommodityData {
  currentPrice: number;
  change: number;
  changePercent: number;
  volume: string;
  marketCap: string;
  high52Week: number;
  low52Week: number;
  trend: string;
}

interface PriceChartProps {
  commodities: Commodity[];
  selectedCommodity: string;
  selectedTimeframe: string;
  timeframes: string[];
  currentData: CommodityData;
  onTimeframeChange: (timeframe: string) => void;
  getChangeColor: (change: number) => string;
}

export default function PriceChart({
  commodities,
  selectedCommodity,
  selectedTimeframe,
  timeframes,
  currentData,
  onTimeframeChange,
  getChangeColor
}: PriceChartProps) {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-bold">
              {commodities.find(c => c.id === selectedCommodity)?.name} Price Chart
            </h3>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-2xl font-bold">
                ${currentData.currentPrice}
              </span>
              <span className={`flex items-center ${getChangeColor(currentData.change)}`}>
                {currentData.change >= 0 ? '↗️' : '↘️'}
                {currentData.change >= 0 ? '+' : ''}${currentData.change} 
                ({currentData.change >= 0 ? '+' : ''}{currentData.changePercent}%)
              </span>
            </div>
          </div>
          <div className="flex space-x-2">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe}
                onClick={() => onTimeframeChange(timeframe)}
                className={`px-3 py-1 rounded text-sm ${
                  selectedTimeframe === timeframe
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {timeframe}
              </button>
            ))}
          </div>
        </div>
        
        {/* Simulated Chart Area */}
        <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200">
          <div className="text-center">
            <div className="text-4xl mb-2">📈</div>
            <div className="text-gray-600">Interactive Price Chart</div>
            <div className="text-sm text-gray-500 mt-1">
              {selectedTimeframe} timeframe for {commodities.find(c => c.id === selectedCommodity)?.name}
            </div>
          </div>
        </div>
        
        {/* Chart Statistics */}
        <div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t">
          <div>
            <div className="text-sm text-gray-600">Volume</div>
            <div className="font-semibold">{currentData.volume}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Market Cap</div>
            <div className="font-semibold">{currentData.marketCap}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">52W High</div>
            <div className="font-semibold">${currentData.high52Week}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">52W Low</div>
            <div className="font-semibold">${currentData.low52Week}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
