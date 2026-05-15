import { Link } from 'react-router';

export default function HeroSection({ user }) {
  return (
    <section className="py-8 md:py-12 mb-6">
      <div className="max-w-2xl">
        {!user ? (
          <>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Blog-Project
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Discover posts from our community
            </h1>
            <p className="text-slate-600 mt-3 leading-relaxed">
              Browse stories below. Log in or sign up to publish your own articles.
            </p>
            <Link
              to="/auth/register"
              className="inline-block mt-6 rounded-xl bg-teal-600 px-6 py-3 text-white font-semibold hover:bg-teal-700 transition-colors shadow-sm"
            >
              Get started free
            </Link>
          </>
        ) : (
          <>
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-2">
              Welcome back
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              Hi, {user.username}
            </h1>
            <p className="text-slate-600 mt-3">
              Use the + button to add a new post, or scroll to read others.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
