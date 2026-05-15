import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="min-h-[50vh] grid place-content-center px-6">
      <div className="text-center">
        <p className="text-xl font-semibold text-teal-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-base-content sm:text-6xl">
          Page not found
        </h1>
        <div className="mt-10">
          <Link
            to="/"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </section>
  );
}
