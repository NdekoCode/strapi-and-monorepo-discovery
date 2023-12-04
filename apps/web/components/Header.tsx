import Navbar from './Navbar';

const Header = () => {
  return (
    <>
      {/* ========== HEADER ========== */}
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
       <Navbar/>
      </header>

      {/* ========== END HEADER ========== */}
    </>
  );
};

export default Header