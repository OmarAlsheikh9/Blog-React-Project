export default function LoadingSpinner() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-200">Loading...</p>
      </div>
    </div>
  );
}
