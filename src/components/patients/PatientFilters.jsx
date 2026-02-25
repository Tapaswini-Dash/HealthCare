// src/components/patients/PatientFilters.jsx

import { Search } from "lucide-react";

const PatientFilters = ({
  searchTerm = "",
  setSearchTerm = () => {},
  statusFilter = "all",
  setStatusFilter = () => {},
}) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4">
      
      {/* 🔍 Search */}
      <div className="relative w-80">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search patients..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      {/* 🔽 Status Filter */}
      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="px-4 py-2 bg-slate-100 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="all">All Status</option>
        <option value="active">Active</option>
        <option value="follow-up">Follow-up</option>
        <option value="discharged">Discharged</option>
      </select>
    </div>
  );
};

export default PatientFilters;