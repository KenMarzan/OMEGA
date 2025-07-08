export default function ToolsAndResources() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">📱 Trading Tools</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <span>Price Calculator</span>
            <button className="text-blue-600 hover:text-blue-800">Launch →</button>
          </li>
          <li className="flex items-center justify-between">
            <span>Risk Assessment</span>
            <button className="text-blue-600 hover:text-blue-800">Launch →</button>
          </li>
          <li className="flex items-center justify-between">
            <span>Profit Simulator</span>
            <button className="text-blue-600 hover:text-blue-800">Launch →</button>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">📊 Market Reports</h3>
        <ul className="space-y-3">
          <li className="flex items-center justify-between">
            <span>Weekly Analysis</span>
            <button className="text-green-600 hover:text-green-800">Download</button>
          </li>
          <li className="flex items-center justify-between">
            <span>Seasonal Forecast</span>
            <button className="text-green-600 hover:text-green-800">Download</button>
          </li>
          <li className="flex items-center justify-between">
            <span>Global Outlook</span>
            <button className="text-green-600 hover:text-green-800">Download</button>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-bold mb-4">⚡ Quick Actions</h3>
        <div className="space-y-3">
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Set Price Alert
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            Export Data
          </button>
          <button className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            Share Analysis
          </button>
        </div>
      </div>
    </div>
  );
}
