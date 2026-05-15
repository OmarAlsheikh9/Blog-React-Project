import { Link } from 'react-router';

export default function FloatingActionButton({ isAuthenticated }) {
  if (!isAuthenticated) return null;

  return (
    <Link
      to="/post/new"
      title="Add post"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-600 text-2xl font-light text-white shadow-lg shadow-teal-600/30 hover:bg-teal-700 hover:scale-105 transition-all"
      aria-label="Add new post"
    >
      +
    </Link>
  );
}
