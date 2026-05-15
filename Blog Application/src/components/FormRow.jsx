export default function FormRow({ label, error, id, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-xs text-red-600">{error}</p>}
    </div>
  );
}
