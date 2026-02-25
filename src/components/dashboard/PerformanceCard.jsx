const PerformanceCard = ({ label, val, color }) => (
  <div className="flex justify-between items-center py-1">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className={`font-bold ${color}`}>{val}</span>
  </div>
);
export default PerformanceCard;