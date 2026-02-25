const ScheduleRow = ({ label, count }) => (
  <div className="flex justify-between items-center text-sm py-1">
    <span className="text-slate-500 font-medium">{label}</span>
    <span className="font-bold text-slate-800">{count}</span>
  </div>
);

export default ScheduleRow;