export default function NewsHeader() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Alerts</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
            Stay informed with the latest agricultural news, weather updates, and critical alerts
          </p>
          <div className="flex justify-center">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
              <div className="text-black">Last Updated: {new Date().toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
