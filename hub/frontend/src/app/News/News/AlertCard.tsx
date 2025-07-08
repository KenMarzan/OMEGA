interface Alert {
  id: number;
  type: string;
  severity: string;
  title: string;
  message: string;
  location: string;
  timestamp: string;
  validUntil: string;
  source: string;
}

interface AlertCardProps {
  alert: Alert;
  getSeverityColor: (severity: string) => string;
  formatTimeAgo: (timestamp: string) => string;
}

export default function AlertCard({ alert, getSeverityColor, formatTimeAgo }: AlertCardProps) {
  return (
    <div className={`border-l-4 p-4 rounded-lg shadow-md ${getSeverityColor(alert.severity)}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg">{alert.title}</h3>
        <span className="text-sm opacity-75">{formatTimeAgo(alert.timestamp)}</span>
      </div>
      <p className="mb-2">{alert.message}</p>
      <div className="flex justify-between items-center text-sm">
        <span>📍 {alert.location}</span>
        <span>Valid until: {new Date(alert.validUntil).toLocaleDateString()}</span>
      </div>
      <div className="text-xs opacity-75 mt-2">Source: {alert.source}</div>
    </div>
  );
}
