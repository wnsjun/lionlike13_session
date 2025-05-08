import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

	export const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gradient-to-b from-pink-200 via-sky-100 to-indigo-200 text-white min-h-screen">
        <Outlet />
      </div>
    </>
  );
};


