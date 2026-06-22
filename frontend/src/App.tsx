import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/layout/Navbar.js";
import ProtectedRoute from "./components/layout/ProtectedRoute.js";
import LoginPage from "./pages/auth/LoginPage.js";
import RegisterPage from "./pages/auth/RegisterPage.js";
import JobsPage from "./pages/JobsPage.js";
import JobDetailPage from "./pages/JobDetailPage.js";
import CandidateDashboard from "./pages/candidate/CandidateDashboard.js";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard.js";
import AdminDashboard from "./pages/admin/AdminDashboard.js";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<JobsPage />} />
          <Route path="/jobs/:id" element={<JobDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/candidate/dashboard"
            element={
              <ProtectedRoute allowedRoles={["candidate"]}>
                <CandidateDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/recruiter/dashboard"
            element={
              <ProtectedRoute allowedRoles={["recruiter"]}>
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}