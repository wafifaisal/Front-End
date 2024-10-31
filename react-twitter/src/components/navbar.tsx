import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-teal-500 font-mono text-white text-center items-center content-center h-[60px] flex justify-center">
      <Link
        className="px-[10px] hover:translate-y-[-2px] hover:underline hover:font-bold transition-transform flex items-center"
        to={"/"}
      >
        <svg
          className="w-4 h-4 mr-1 transition-transform hover:rotate-[-15deg]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l9-9m0 0l9 9m-9-9v18"
          />
        </svg>
        Home
      </Link>
      <Link
        className="px-[10px] hover:translate-y-[-2px] hover:underline hover:font-bold transition-transform flex items-center"
        to={"/register"}
      >
        <svg
          className="w-4 h-4 mr-1 transition-transform hover:rotate-[-15deg]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Register
      </Link>
    </div>
  );
}

export default Navbar;
