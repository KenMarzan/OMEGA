export default function MarketHeader() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Market Analysis</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Real-time agricultural commodity prices, trends, and market insights powered by AI
          </p>
          <div className="flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-sm">Market Status: <span className="font-bold">OPEN</span></div>
              <div className="text-xs">Last Updated: {new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
