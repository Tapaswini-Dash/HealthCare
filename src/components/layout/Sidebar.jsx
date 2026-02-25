// src/components/layout/Sidebar.jsx

import {
  Activity,
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  BarChart3,
  MessageSquare,
  Bell,
  Settings,
} from "lucide-react";

import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col">

      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <Activity className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-bold text-blue-900">
          MediCare Pro
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">

        {/* Main Menu */}
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
          Main Menu
        </p>

        <NavItem
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          to="/dashboard"
        />
        <NavItem
          icon={<Users size={20} />}
          label="Patients"
          to="/patients"
          badge="234"
        />
        <NavItem
          icon={<Calendar size={20} />}
          label="Appointments"
          badge="12"
        />
        <NavItem
          icon={<FileText size={20} />}
          label="Medical Records"
        />
        <NavItem
          icon={<BarChart3 size={20} />}
          label="Analytics"
        />

        {/* Communication */}
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-2 px-2">
          Communication
        </p>

        <NavItem
          icon={<MessageSquare size={20} />}
          label="Messages"
          badge="5"
          badgeColor="bg-red-500"
        />
        <NavItem
          icon={<Bell size={20} />}
          label="Notifications"
          badge="5"
          badgeColor="bg-red-500"
        />
        <NavItem
          icon={<Activity size={20} />}
          label="Health Monitor"
        />
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-100">
        <NavItem
          icon={<Settings size={20} />}
          label="Settings"
        />
      </div>
    </aside>
  );
};

export default Sidebar;