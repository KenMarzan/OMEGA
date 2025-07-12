"use client";

import { useState } from "react";
import MarketHeader from "@/app/Market_analysis/Market/MarketHeader";
import PriceAlerts from "@/app/Market_analysis/Market/PriceAlerts";
import MarketIndicators from "@/app/Market_analysis/Market/MarketIndicators";
import CommoditySelection from "@/app/Market_analysis/Market/CommoditySelection";
import PriceChart from "@/app/Market_analysis/Market/PriceChart";
import MarketSidebar from "@/app/Market_analysis/Market/MarketSidebar";
import CommodityTable from "@/app/Market_analysis/Market/CommodityTable";
import ToolsAndResources from "@/app/Market_analysis/Market/ToolsAndResources";
import {
  timeframes,
  commodities,
  marketData,
  marketInsights,
  regionalPrices,
  marketIndicators,
  priceAlerts,
} from "@/data/marketData";

export default function MarketAnalysisPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("1M");
  const [selectedCommodity, setSelectedCommodity] =
    useState<keyof typeof marketData>("rice");

  const getCurrentData = () => marketData[selectedCommodity];

  const getChangeColor = (change: number) => {
    return change >= 0 ? "text-green-600" : "text-red-600";
  };

  const getTrendIcon = (trend: string) => {
    return trend === "bullish" ? "📈" : trend === "bearish" ? "📉" : "➡️";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <MarketHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Price Alerts */}
        <div className="animate-fade-in">
          <PriceAlerts alerts={priceAlerts} />
        </div>

        {/* Market Indicators */}
        <div className="animate-fade-in-delay-1">
          <MarketIndicators
            indicators={marketIndicators}
            getTrendIcon={getTrendIcon}
            getChangeColor={getChangeColor}
          />
        </div>

        {/* Commodity Selection */}
        <div className="animate-fade-in-delay-2">
          <CommoditySelection
            commodities={commodities}
            selectedCommodity={selectedCommodity}
            onCommodityChange={(commodityId) =>
              setSelectedCommodity(commodityId as keyof typeof marketData)
            }
          />
        </div>

        {/* Main Price Dashboard */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 animate-fade-in-delay-3">
          {/* Price Chart Area - Takes up more space */}
          <div className="xl:col-span-3">
            <PriceChart
              commodities={commodities}
              selectedCommodity={selectedCommodity}
              selectedTimeframe={selectedTimeframe}
              timeframes={timeframes}
              currentData={getCurrentData()}
              onTimeframeChange={setSelectedTimeframe}
              getChangeColor={getChangeColor}
            />
          </div>

          {/* Market Insights Sidebar */}
          <div className="xl:col-span-1">
            <MarketSidebar
              marketInsights={marketInsights}
              regionalPrices={regionalPrices}
            />
          </div>
        </div>

        {/* All Commodities Overview */}
        <div className="animate-fade-in-delay-4">
          <CommodityTable
            commodities={commodities}
            marketData={marketData}
            getChangeColor={getChangeColor}
            getTrendIcon={getTrendIcon}
          />
        </div>

        {/* Tools and Resources */}
        <div className="animate-fade-in-delay-5">
          <ToolsAndResources />
        </div>
      </div>
    </div>
  );
}
