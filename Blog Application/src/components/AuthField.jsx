export const authInputClass =
  'w-full px-0 py-2.5 bg-transparent border-0 border-b-2 border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-teal-600 transition-colors text-base';

export default function AuthField({ label, id, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold uppercase tracking-wide text-slate-500"
        >
          {label}
        </label>
      )}
      {children}
      {error && (
        <span className="text-xs text-red-600 font-medium">{error}</span>
      )}
    </div>
  );
}
