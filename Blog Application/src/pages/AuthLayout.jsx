import { NavLink, Outlet } from 'react-router';
import { Link } from 'react-router';
import Logo from '../components/Logo';

export default function AuthLayout() {
  return (
    <div className="min-h-[calc(100vh-64px)] grid lg:grid-cols-2">
      <aside className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 p-10 text-white">
        <Logo variant="dark" />
        <div>
          <h1 className="text-3xl xl:text-4xl font-bold leading-tight">
            Write on Blog-Project
          </h1>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed max-w-md">
            A simple place to read community posts and publish your own when you
            are signed in.
          </p>
        </div>
        <p className="text-sm text-slate-500">
          React course final project · json-server-auth
        </p>
      </aside>

      <div className="flex flex-col justify-center px-6 py-10 sm:px-12 bg-slate-50">
        <div className="lg:hidden mb-8">
          <Link to="/">
            <Logo variant="light" />
          </Link>
        </div>

        <div className="w-full max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">Account access</h2>
            <p className="text-slate-500 mt-1 text-sm">
              Choose login or register to continue.
            </p>
          </div>

          <div className="flex border-b border-slate-200 mb-8">
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                `flex-1 text-center pb-3 text-sm font-semibold border-b-2 transition-colors ${
                  isActive
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`
              }
            >
              Log in
            </NavLink>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                `flex-1 text-center pb-3 text-sm font-semibold border-b-2 transition-colors ${
                  isActive
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-slate-400 hover:text-slate-600'
                }`
              }
            >
              Register
            </NavLink>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
            <Outlet />
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            <Link to="/" className="text-teal-600 hover:text-teal-800 font-medium">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
