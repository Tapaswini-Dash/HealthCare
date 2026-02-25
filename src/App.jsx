// src/App.jsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import PatientDetails from "./pages/PatientDetails";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard Route */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Future Routes Example */}
        <Route path="/patients" element={<Patients />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        <Route path="/patients/:id" element={<PatientDetails />} />
        {/* 404 Fallback */}
        <Route
          path="*"
          element={
            <div className="h-screen flex items-center justify-center text-xl font-semibold">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;