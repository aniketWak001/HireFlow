import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth.js";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  allowedRoles?: ("candidate" | "recruiter" | "admin")[];
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
