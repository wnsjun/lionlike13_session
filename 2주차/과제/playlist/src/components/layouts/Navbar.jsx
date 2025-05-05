import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 border-b-1 border-white-800 left-0 right-0 h-20 bg-pink-300 text-white flex items-center justify-between px-10 z-50 shadow-md">
      <div className="space-x-10 flex items-center">
        <Link to="/" className="font-semibold text-2xl">
          Playlist 🎧
        </Link>
        <Link to="/top100" className="font-bold">Top 100</Link>
        <Link to="/mypage" className="font-bold">My Page</Link>
      </div>
      <Link to="/login" className="font-bold">Login</Link>
    </nav>
  );
};
