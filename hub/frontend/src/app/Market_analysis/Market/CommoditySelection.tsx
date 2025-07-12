interface Commodity {
  id: string;
  name: string;
  symbol: string;
  icon: string;
}

interface CommoditySelectionProps {
  commodities: Commodity[];
  selectedCommodity: string;
  onCommodityChange: (commodityId: string) => void;
}

export default function CommoditySelection({
  commodities,
  selectedCommodity,
  onCommodityChange,
}: CommoditySelectionProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg">
          <span className="text-white text-xl">🌾</span>
        </div>
        <h2 className="text-3xl font-bold gradient-text">Commodity Prices</h2>
      </div>

      <div className="modern-card p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {commodities.map((commodity, index) => (
            <button
              key={commodity.id}
              onClick={() => onCommodityChange(commodity.id)}
              className={`group relative flex flex-col items-center space-y-3 p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                selectedCommodity === commodity.id
                  ? "bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-lg scale-105"
                  : "bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Selection indicator */}
              {selectedCommodity === commodity.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-green-500 text-sm">✓</span>
                </div>
              )}

              {/* Icon with background */}
              <div
                className={`p-3 rounded-full transition-all duration-300 ${
                  selectedCommodity === commodity.id
                    ? "bg-white/20 backdrop-blur-sm"
                    : "bg-white group-hover:bg-gray-200"
                }`}
              >
                <span className="text-2xl">{commodity.icon}</span>
              </div>

              {/* Commodity info */}
              <div className="text-center">
                <div
                  className={`font-semibold text-sm ${
                    selectedCommodity === commodity.id
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {commodity.name}
                </div>
                <div
                  className={`text-xs font-medium mt-1 ${
                    selectedCommodity === commodity.id
                      ? "text-white/80"
                      : "text-gray-500"
                  }`}
                >
                  {commodity.symbol}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  selectedCommodity === commodity.id
                    ? "bg-gradient-to-br from-green-400/20 to-blue-400/20"
                    : "bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/10 group-hover:to-blue-500/10"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Quick stats */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{commodities.length} commodities tracked</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live prices
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
