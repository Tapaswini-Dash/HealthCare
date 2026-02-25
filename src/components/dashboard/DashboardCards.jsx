// src/components/dashboard/DashboardCards.jsx

import AnalyticItem from "./AnalyticItem";
import StatCard from "./StatCard";
import { TrendingUp } from "lucide-react";

const DashboardCards = ({ stats, analytics }) => {
  return (
    <div className="space-y-8">
      
      {/* ================= ANALYTICS SECTION ================= */}
      <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={20} />
              Monthly Analytics Overview
            </h3>
            <p className="text-xs text-slate-400">
              Comprehensive insights for this month
            </p>
          </div>

          <button className="text-blue-600 text-sm font-semibold hover:underline">
            View Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {analytics.map((item) => (
            <AnalyticItem key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* ================= STATS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;