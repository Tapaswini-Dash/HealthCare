const PatientRow = ({ name, id, age, condition, status, date }) => (
  <tr className="hover:bg-slate-50 transition-colors group">
    <td className="px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold uppercase">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <span className="text-sm font-bold text-slate-800">{name}</span>
      </div>
    </td>
    <td className="px-6 py-4 text-sm text-slate-500">{id}</td>
    <td className="px-6 py-4 text-sm text-slate-500">{age}</td>
    <td className="px-6 py-4 text-sm text-slate-500 font-medium">{condition}</td>
    <td className="px-6 py-4">
      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
        status === 'active' ? 'bg-emerald-100 text-emerald-600' : 
        status === 'follow-up' ? 'bg-orange-100 text-orange-600' : 
        'bg-slate-100 text-slate-500'
      }`}>
        {status}
      </span>
    </td>
    <td className="px-6 py-4 text-sm text-slate-500">{date}</td>
    <td className="px-6 py-4">
      <div className="flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="p-1 text-slate-400 hover:text-blue-600"><Eye size={16} /></button>
        <button className="p-1 text-slate-400 hover:text-blue-600"><Edit2 size={16} /></button>
        <button className="p-1 text-slate-400 hover:text-blue-600"><MoreVertical size={16} /></button>
      </div>
    </td>
  </tr>
);

export default PatientRow;