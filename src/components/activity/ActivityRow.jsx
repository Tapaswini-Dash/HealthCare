const ActivityRow = ({ dot, label, time }) => (
  <div className="flex gap-3">
    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${dot}`}></div>
    <div>
      <p className="text-sm font-bold text-slate-800 leading-tight">{label}</p>
      <p className="text-xs text-slate-400">{time}</p>
    </div>
  </div>
);

export default ActivityRow;