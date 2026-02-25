// src/components/patients/PatientTable.jsx

import { useNavigate } from "react-router-dom";
import {
  formatDate,
  getInitials,
  getStatusColor,
} from "../../utils/helpers";

const PatientTable = ({ patients = [] }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 text-slate-600 uppercase text-xs">
          <tr>
            <th className="px-6 py-3 text-left">Patient</th>
            <th className="px-6 py-3 text-left">Age</th>
            <th className="px-6 py-3 text-left">Gender</th>
            <th className="px-6 py-3 text-left">Condition</th>
            <th className="px-6 py-3 text-left">Last Visit</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.length > 0 ? (
            patients.map((patient) => (
              <tr
                key={patient.id}
                onClick={() => navigate(`/patients/${patient.id}`)}
                className="border-t hover:bg-slate-50 transition cursor-pointer"
              >
                {/* Patient Info */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full text-xs font-bold">
                    {getInitials(patient.name)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {patient.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {patient.id}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4">{patient.age}</td>
                <td className="px-6 py-4">{patient.gender}</td>
                <td className="px-6 py-4">{patient.condition}</td>
                <td className="px-6 py-4">
                  {formatDate(patient.lastVisit)}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      patient.status
                    )}`}
                  >
                    {patient.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-8 text-slate-400">
                No patients found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;