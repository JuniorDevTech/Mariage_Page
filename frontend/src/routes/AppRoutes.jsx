import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import DashboardPage from "../features/admin/pages/DashboardPage";
import ProtectedRoute from "../features/admin/components/ProtectedRoute";
import LoginPage from "../features/admin/pages/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<LoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
