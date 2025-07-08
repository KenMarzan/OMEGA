interface PriceAlert {
  id: number;
  commodity: string;
  alertType: string;
  message: string;
  severity: string;
  timestamp: string;
}

interface PriceAlertsProps {
  alerts: PriceAlert[];
}

export default function PriceAlerts({ alerts }: PriceAlertsProps) {
  if (alerts.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        🔔 Price Alerts
        <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          {alerts.length}
        </span>
      </h2>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`border-l-4 p-4 rounded-lg shadow-sm ${
              alert.severity === 'warning' ? 'bg-yellow-50 border-yellow-400' : 'bg-blue-50 border-blue-400'
            }`}
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">{alert.commodity}</span>
                <span className="text-gray-600 ml-2">• {alert.alertType}</span>
              </div>
              <span className="text-sm text-gray-500">{alert.timestamp}</span>
            </div>
            <p className="text-sm mt-1">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
