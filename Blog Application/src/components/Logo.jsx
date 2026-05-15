import { Link } from 'react-router';

export default function Logo({ variant = 'dark' }) {
  const isDark = variant === 'dark';

  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold tracking-tight transition-transform group-hover:scale-105 ${
          isDark
            ? 'bg-teal-500 text-slate-900'
            : 'bg-teal-600 text-white'
        }`}
      >
        BP
      </span>
      <span
        className={`text-lg sm:text-xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-slate-800'
        }`}
      >
        Blog<span className="text-teal-400">-Project</span>
      </span>
    </Link>
  );
}
