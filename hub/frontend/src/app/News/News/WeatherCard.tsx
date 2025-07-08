interface WeatherUpdate {
  id: number;
  location: string;
  condition: string;
  temperature: string;
  humidity: string;
  windSpeed: string;
  precipitation: string;
  forecast: string;
  alertLevel: string;
  icon: string;
}

interface WeatherCardProps {
  weather: WeatherUpdate;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${
        weather.alertLevel === 'warning' ? 'border-l-4 border-orange-500' : ''
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{weather.location}</h3>
        <span className="text-3xl">{weather.icon}</span>
      </div>
      <div className="text-2xl font-bold mb-2">{weather.temperature}</div>
      <div className="text-gray-600 mb-4">{weather.condition}</div>
      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <div>💧 Humidity: {weather.humidity}</div>
        <div>🌬️ Wind: {weather.windSpeed}</div>
        <div>🌧️ Rain: {weather.precipitation}</div>
      </div>
      <div className="text-sm text-gray-700 italic">{weather.forecast}</div>
    </div>
  );
}
