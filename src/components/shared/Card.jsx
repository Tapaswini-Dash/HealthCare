const Card = ({ title, icon, children, footer }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col">
    <div className="p-5 flex items-center gap-2 border-b border-slate-50">
      <div className="text-blue-500">{icon}</div>
      <h3 className="font-bold text-slate-800">{title}</h3>
    </div>
    <div className="p-5 flex-1">{children}</div>
    {footer && (
      <button className="w-full py-3 border-t border-slate-50 text-xs font-bold text-slate-400 hover:bg-slate-50 transition rounded-b-2xl">
        {footer.toUpperCase()}
      </button>
    )}
  </div>
);

export default Card;