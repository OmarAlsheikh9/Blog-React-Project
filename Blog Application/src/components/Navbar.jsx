import { Link, NavLink } from 'react-router';
import { useAuth } from '../contexts/auth/useAuth';
import Logo from './Logo';
import UserInfo from './UserInfo';

export default function Navbar() {
  const { user, logout } = useAuth();

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
      isActive
        ? 'bg-white/15 text-white'
        : 'text-slate-300 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header className="bg-slate-900 text-white shadow-lg border-b border-slate-700/80">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo variant="dark" />

        <nav className="flex items-center gap-1 sm:gap-2 order-3 w-full sm:order-2 sm:w-auto justify-center sm:justify-start">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 order-2 sm:order-3 ml-auto sm:ml-0">
          {user ? (
            <UserInfo user={user} logout={logout} variant="dark" />
          ) : (
            <>
              <Link
                to="/auth/login"
                className="text-sm font-medium text-slate-200 hover:text-white px-3 py-2 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/auth/register"
                className="text-sm font-semibold rounded-lg border-2 border-teal-400 text-teal-300 px-4 py-2 hover:bg-teal-400 hover:text-slate-900 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
