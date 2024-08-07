export const Spinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="border-8 border-t-8 border-gray-200 border-t-blue-300 h-16 w-16 rounded-full animate-spin"></div>
    </div>
  );
};
