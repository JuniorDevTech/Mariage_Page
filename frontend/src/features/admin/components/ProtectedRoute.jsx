import { Navigate } from "react-router-dom";

import { useAppSelector } from "../../../hooks/useAppSelector";

const ProtectedRoute = ({ children }) => {
  const adminState = useAppSelector((state) => state.admin);

  console.log("PROTECTED", adminState);

  const isAuthenticated = adminState?.isAuthenticated;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
