import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/auth/useAuth';

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

  return <Outlet />;
}
