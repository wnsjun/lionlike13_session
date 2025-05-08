export const Modal = () => {
  return (
    <div className="fixed inset-0  z-[9999] flex items-center justify-center"style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} >
      <div className="w-[600px] h-[600px] p-5 bg-white border border-gray-300 rounded-2xl shadow-md">
      </div>
    </div>
  );
};
