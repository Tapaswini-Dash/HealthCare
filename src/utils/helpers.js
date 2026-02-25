// src/utils/helpers.js

// Format date nicely
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// Get initials from name
export const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

// Format number with commas
export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num);
};

// Status color mapping
export const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-emerald-100 text-emerald-600";
    case "follow-up":
      return "bg-orange-100 text-orange-600";
    case "discharged":
      return "bg-slate-100 text-slate-500";
    default:
      return "bg-gray-100 text-gray-500";
  }
};