// src/pages/Patients.jsx

import { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import StatCard from "../components/dashboard/StatCard";
import PatientFilters from "../components/patients/PatientFilters";
import PatientTable from "../components/patients/PatientTable";

import useDashboardData from "../hooks/useDashboardData";

const Patients = () => {
  const { patients, loading } = useDashboardData();

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // 🔢 Calculate Stats
  const stats = useMemo(() => {
    const total = patients.length;
    const discharged = patients.filter(
      (p) => p.status === "discharged"
    ).length;
    const followUp = patients.filter(
      (p) => p.status === "follow-up"
    ).length;

    return [
      {
        id: 1,
        label: "Total Patients",
        value: total,
      },
      {
        id: 2,
        label: "Discharged",
        value: discharged,
      },
      {
        id: 3,
        label: "Follow-up",
        value: followUp,
      },
    ];
  }, [patients]);

  // 🔍 Filter Patients
  const filteredPatients = useMemo(() => {
    return patients.filter((patient) => {
      const matchesSearch = patient.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        patient.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [patients, searchTerm, statusFilter]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading Patients...
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-700">
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        <Header />

        <div className="p-8 space-y-8">

          {/* ================= TOP STATS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* ================= FILTERS ================= */}
          <PatientFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />

          {/* ================= TABLE ================= */}
          <PatientTable patients={filteredPatients} />
        </div>
      </main>
    </div>
  );
};

export default Patients;