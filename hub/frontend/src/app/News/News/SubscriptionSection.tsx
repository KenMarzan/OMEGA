export default function SubscriptionSection() {
  return (
    <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Subscribe to receive real-time alerts, weather updates, and breaking agricultural news directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
        <div className="flex justify-center space-x-6 mt-6">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" defaultChecked />
            Weather Alerts
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" defaultChecked />
            Market Updates
          </label>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Technology News
          </label>
        </div>
      </div>
    </div>
  );
}
