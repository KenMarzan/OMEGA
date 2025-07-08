"use client";

import { useState } from 'react';
import NewsHeader from '@/app/News/News/NewsHeader';
import AlertCard from '@/app/News/News/AlertCard';
import WeatherCard from '@/app/News/News/WeatherCard';
import NavigationTabs from '@/app/News/News/NavigationTabs';
import NewsCard from '@/app/News/News/NewsCard';
import SubscriptionSection from '@/app/News/News/SubscriptionSection';
import { tabs, urgentAlerts, newsArticles, weatherUpdates } from '@/data/newsData';

export default function NewsAlertPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredContent = () => {
    if (activeTab === 'all') {
      return newsArticles;
    } else if (activeTab === 'alerts') {
      return [];
    } else if (activeTab === 'weather') {
      return newsArticles.filter(article => article.category === 'weather');
    } else {
      return newsArticles.filter(article => article.category === activeTab);
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 border-red-500 text-red-800';
      case 'medium': return 'bg-yellow-100 border-yellow-500 text-yellow-800';
      case 'low': return 'bg-blue-100 border-blue-500 text-blue-800';
      default: return 'bg-gray-100 border-gray-500 text-gray-800';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const time = new Date(timestamp);
    const diffInHours = Math.floor((now.getTime() - time.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Urgent Alerts Section */}
        {urgentAlerts.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              🚨 Urgent Alerts
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {urgentAlerts.length}
              </span>
            </h2>
            <div className="space-y-4">
              {urgentAlerts.map((alert) => (
                <AlertCard
                  key={alert.id}
                  alert={alert}
                  getSeverityColor={getSeverityColor}
                  formatTimeAgo={formatTimeAgo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Weather Dashboard */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🌤️ Regional Weather Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weatherUpdates.map((weather) => (
              <WeatherCard key={weather.id} weather={weather} />
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <NavigationTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* News Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredContent().map((article) => (
            <NewsCard
              key={article.id}
              article={article}
              formatTimeAgo={formatTimeAgo}
            />
          ))}
        </div>

        {/* Subscription Section */}
        <SubscriptionSection />
      </div>
    </div>
  );
}
