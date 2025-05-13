import { Moon, Sun } from "lucide-react";
import useDarkMode from "../hooks/darkmode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <nav className="w-full bg-white dark:bg-gray-900 p-4 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="sm:text-4xl text-2xl font-bold text-orange-400 dark:text-white tracking-tight">
          SoftSell
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <Sun className="h-8 w-8 text-yellow-400" />
          ) : (
            <Moon className="h-8 w-8 text-gray-400" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
