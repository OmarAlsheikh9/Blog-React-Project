import { useNavigate } from 'react-router';

export default function UserInfo({ user, logout, variant = 'light' }) {
  const navigate = useNavigate();
  const isDark = variant === 'dark';

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span
        className={`text-sm font-medium ${
          isDark ? 'text-teal-200' : 'text-slate-700'
        }`}
      >
        Hi {user.username}
      </span>
      <button
        type="button"
        onClick={handleLogout}
        className={`text-sm font-semibold transition-colors ${
          isDark
            ? 'text-slate-300 hover:text-white underline-offset-2 hover:underline'
            : 'text-teal-700 hover:text-teal-900 underline-offset-2 hover:underline'
        }`}
      >
        Log Out
      </button>
    </div>
  );
}
