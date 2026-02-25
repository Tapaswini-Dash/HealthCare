// src/components/layout/NavItem.jsx

import { NavLink } from "react-router-dom";

const NavItem = ({
  icon,
  label,
  to = "/",
  badge,
  badgeColor = "bg-blue-500",
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition
        ${
          isActive
            ? "bg-blue-50 text-blue-600"
            : "text-slate-600 hover:bg-slate-100"
        }`
      }
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>

      {badge && (
        <span
          className={`text-white text-xs px-2 py-0.5 rounded-full ${badgeColor}`}
        >
          {badge}
        </span>
      )}
    </NavLink>
  );
};

export default NavItem;