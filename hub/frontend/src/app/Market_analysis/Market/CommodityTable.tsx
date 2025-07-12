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

interface CommodityTableProps {
  commodities: Commodity[];
  marketData: Record<string, CommodityData>;
  getChangeColor: (change: number) => string;
  getTrendIcon: (trend: string) => string;
}

export default function CommodityTable({
  commodities,
  marketData,
  getChangeColor,
  getTrendIcon,
}: CommodityTableProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">📋 All Commodities Overview</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Commodity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Volume
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {commodities.map((commodity) => {
                const data = marketData[commodity.id];
                return (
                  <tr key={commodity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{commodity.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {commodity.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {commodity.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        ${data.currentPrice}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${getChangeColor(data.change)}`}>
                        {data.change >= 0 ? "+" : ""}${data.change} (
                        {data.change >= 0 ? "+" : ""}
                        {data.changePercent}%)
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {data.volume}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-lg">
                        {getTrendIcon(data.trend)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
