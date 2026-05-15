import { Outlet, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthProvider from '../contexts/auth/AuthProvider';

export default function AppLayout() {
  const { pathname } = useLocation();
  const isAuthPage = pathname.startsWith('/auth');

  return (
    <AuthProvider>
      {!isAuthPage && <Navbar />}

      <main className={isAuthPage ? 'min-h-screen' : 'min-h-[calc(100vh-64px-68px)]'}>
        {isAuthPage ? (
          <Outlet />
        ) : (
          <div className="container mx-auto px-4 sm:px-6">
            <Outlet />
          </div>
        )}
      </main>

      {!isAuthPage && <Footer />}
    </AuthProvider>
  );
}
