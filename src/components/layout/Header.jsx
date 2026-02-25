// src/components/layout/Header.jsx

import { Search, Bell } from "lucide-react";

const Header = ({
  userName = "Dr. Ateeq",
  role = "Physician",
  notificationCount = 3,
}) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      
      {/* 🔍 Search */}
      <div className="relative w-96">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search patients, appointments..."
          className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
        />
      </div>

      {/* 🔔 Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Notifications */}
        <div className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full cursor-pointer transition">
          <Bell size={20} />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">
              {notificationCount}
            </span>
          )}
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">
              {userName}
            </p>
            <p className="text-xs text-slate-500">
              {role}
            </p>
          </div>

          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
              userName
            )}&background=f87171&color=fff`}
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;