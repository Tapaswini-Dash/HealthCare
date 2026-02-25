// src/hooks/useDashboardData.js

import { useState, useEffect } from "react";
import {
  statsData,
  analyticsData,
  patientsData,
} from "../data/dashboardData";

const useDashboardData = () => {
  const [stats, setStats] = useState([]);
  const [analytics, setAnalytics] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStats(statsData);
      setAnalytics(analyticsData);
      setPatients(patientsData);
      setLoading(false);
    }, 500);
  }, []);

  return {
    stats,
    analytics,
    patients,
    loading,
  };
};

export default useDashboardData;