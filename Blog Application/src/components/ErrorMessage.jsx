export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center max-w-md mx-auto shadow-sm">
      <div className="text-4xl mb-3">⚠️</div>
      <h3 className="text-lg font-semibold text-red-800 mb-1">
        Something went wrong
      </h3>
      <p className="text-sm text-red-600 font-medium">{message}</p>
    </div>
  );
}