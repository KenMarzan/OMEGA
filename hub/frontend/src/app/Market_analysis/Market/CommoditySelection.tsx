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

export default function CommoditySelection({ commodities, selectedCommodity, onCommodityChange }: CommoditySelectionProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">🌾 Commodity Prices</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {commodities.map((commodity) => (
          <button
            key={commodity.id}
            onClick={() => onCommodityChange(commodity.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              selectedCommodity === commodity.id
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 hover:bg-green-50'
            }`}
          >
            <span>{commodity.icon}</span>
            <span>{commodity.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
