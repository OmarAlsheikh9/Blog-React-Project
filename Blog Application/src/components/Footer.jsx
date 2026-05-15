export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="container mx-auto px-6 py-5 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-slate-800">Blog-Project</span>
        </p>
        <p className="mt-1 text-slate-500">
          Developed by{' '}
          <span className="font-medium text-teal-700">Omar Alshiekh</span>
        </p>
      </div>
    </footer>
  );
}
