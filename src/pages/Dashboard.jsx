import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

import AnalyticItem from "../components/dashboard/AnalyticItem";
import StatCard from "../components/dashboard/StatCard";
import PerformanceCard from "../components/dashboard/PerformanceCard";
import DashboardCards from "../components/dashboard/DashboardCards";

import PatientTable from "../components/patients/PatientTable";
import PatientFilters from "../components/patients/PatientFilters";

import Card from "../components/shared/Card";

import ScheduleRow from "../components/activity/ScheduleRow";
import ActivityRow from "../components/activity/ActivityRow";

import { TrendingUp, Calendar, Activity } from "lucide-react";

import useDashboardData from "../hooks/useDashboardData";

const Dashboard = () => {
    const { stats, analytics, patients, loading } = useDashboardData();
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredPatients = patients.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === "all" || patient.status === statusFilter;

        return matchesSearch && matchesStatus;
    });
    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <p className="text-lg font-semibold text-slate-500">
                    Loading Dashboard...
                </p>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans text-slate-700">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <Header />

                <div className="p-8 space-y-8">

                    {/* ================== ANALYTICS SECTION ================== */}
                    <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h3 className="text-lg font-bold flex items-center gap-2">
                                    <TrendingUp className="text-blue-500" size={20} />
                                    Monthly Analytics Overview
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Comprehensive insights for October 2025
                                </p>
                            </div>
                            <button className="text-blue-600 text-sm font-semibold hover:underline">
                                View Details
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-8">
                            {analytics.map((item) => (
                                <AnalyticItem key={item.id} {...item} />
                            ))}
                        </div>
                    </section>

                    {/* ================== STATS SECTION ================== */}
                    <div className="grid grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <StatCard key={stat.id} {...stat} />
                        ))}
                    </div>

                    {/* ================== SECONDARY CARDS ================== */}
                    <div className="grid grid-cols-3 gap-6">

                        {/* Schedule Card */}
                        <Card
                            title="Today's Schedule"
                            icon={<Calendar size={18} />}
                            footer="View Full Schedule"
                        >
                            <div className="space-y-3">
                                <ScheduleRow label="Morning" count="8 patients" />
                                <ScheduleRow label="Afternoon" count="12 patients" />
                                <ScheduleRow label="Evening" count="8 patients" />
                            </div>
                        </Card>

                        {/* Activity Card */}
                        <Card
                            title="Recent Activity"
                            icon={<Activity size={18} />}
                            footer=""
                        >
                            <div className="space-y-4">
                                <ActivityRow
                                    dot="bg-emerald-500"
                                    label="Lab results uploaded"
                                    time="2 minutes ago"
                                />
                                <ActivityRow
                                    dot="bg-orange-400"
                                    label="Appointment rescheduled"
                                    time="15 minutes ago"
                                />
                                <ActivityRow
                                    dot="bg-blue-500"
                                    label="New patient registered"
                                    time="1 hour ago"
                                />
                            </div>
                        </Card>

                        {/* Performance Card */}
                        <PerformanceCard />
                    </div>

                    {/* ================== PATIENT TABLE ================== */}
                    <PatientFilters
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        statusFilter={statusFilter}
                        setStatusFilter={setStatusFilter}
                    />

                    <PatientTable patients={filteredPatients} />

                </div>
            </main>
        </div>
    );
};

export default Dashboard;