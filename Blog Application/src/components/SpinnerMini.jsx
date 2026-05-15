export default function SpinnerMini() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
      <p className="mt-4 text-gray-300">Loading...</p>
    </div>
  );
}
