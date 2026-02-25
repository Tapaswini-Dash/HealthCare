import { TrendingUp } from "lucide-react";

const AnalyticItem = ({ label, value, sub, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <p className="text-xs text-slate-500 font-medium">{label}</p>
      <TrendingUp size={14} className="text-emerald-500" />
    </div>
    <p className="text-2xl font-bold text-slate-900">{value}</p>
    <p className="text-[10px] text-slate-400">{sub}</p>
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={`h-full ${color}`} style={{ width: '70%' }}></div>
    </div>
  </div>
);

export default AnalyticItem;