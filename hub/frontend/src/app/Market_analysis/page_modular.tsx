"use client";

import { useState } from 'react';
import MarketHeader from '@/app/Market_analysis/Market/MarketHeader';
import PriceAlerts from '@/app/Market_analysis/Market/PriceAlerts';
import MarketIndicators from '@/app/Market_analysis/Market/MarketIndicators';
import CommoditySelection from '@/app/Market_analysis/Market/CommoditySelection';
import PriceChart from '@/app/Market_analysis/Market/PriceChart';
import MarketSidebar from '@/app/Market_analysis/Market/MarketSidebar';
import CommodityTable from '@/app/Market_analysis/Market/CommodityTable';
import ToolsAndResources from '@/app/Market_analysis/Market/ToolsAndResources';
import {
  timeframes,
  commodities,
  marketData,
  marketInsights,
  regionalPrices,
  marketIndicators,
  priceAlerts
} from '@/data/marketData';

export default function MarketAnalysisPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('1M');
  const [selectedCommodity, setSelectedCommodity] = useState<keyof typeof marketData>('wheat');

  const getCurrentData = () => marketData[selectedCommodity];

  const getChangeColor = (change: number) => {
    return change >= 0 ? 'text-green-600' : 'text-red-600';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'bullish' ? '📈' : trend === 'bearish' ? '📉' : '➡️';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Price Alerts */}
        <PriceAlerts alerts={priceAlerts} />

        {/* Market Indicators */}
        <MarketIndicators
          indicators={marketIndicators}
          getTrendIcon={getTrendIcon}
          getChangeColor={getChangeColor}
        />

        {/* Commodity Selection */}
        <CommoditySelection
          commodities={commodities}
          selectedCommodity={selectedCommodity}
          onCommodityChange={(commodityId) => setSelectedCommodity(commodityId as keyof typeof marketData)}
        />

        {/* Main Price Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Price Chart Area */}
          <PriceChart
            commodities={commodities}
            selectedCommodity={selectedCommodity}
            selectedTimeframe={selectedTimeframe}
            timeframes={timeframes}
            currentData={getCurrentData()}
            onTimeframeChange={setSelectedTimeframe}
            getChangeColor={getChangeColor}
          />

          {/* Market Insights Sidebar */}
          <MarketSidebar
            marketInsights={marketInsights}
            regionalPrices={regionalPrices}
          />
        </div>

        {/* All Commodities Overview */}
        <CommodityTable
          commodities={commodities}
          marketData={marketData}
          getChangeColor={getChangeColor}
          getTrendIcon={getTrendIcon}
        />

        {/* Tools and Resources */}
        <ToolsAndResources />
      </div>
    </div>
  );
}
