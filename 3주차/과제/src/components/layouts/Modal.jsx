/* eslint-disable react/prop-types */  //ESLint 경고 끄기

export const Modal = ({ imageUrl, onClose }) => {

  // 모달 바깥을 클릭하면 닫히도록 처리
  const handleBackground = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={handleBackground} // 배경 클릭 시 닫힘
    >
      <div className="relative w-[600px] h-[600px] bg-white border border-gray-300 rounded-2xl shadow-md overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
        >
          ×
        </button>
        <img
          src={imageUrl} alt="앨범 커버"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};
