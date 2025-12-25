
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-full md:w-56 lg:w-64 p-3 md:p-4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-hidden">
      <ul className="space-y-1 text-sm md:text-base">
        <li className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Home</li>
        <li
          tabIndex={0}
          role="button"
          className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
        >
          Shorts
        </li>
        <li
          tabIndex={0}
          role="button"
          className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
        >
          Subscriptions
        </li>
      </ul>

      <hr className="my-3 border-gray-200 dark:border-gray-700" />

      <h2 className="font-semibold text-sm md:text-base mb-1 text-gray-900 dark:text-gray-100">
        Explore
      </h2>
      <ul className="space-y-1 text-sm md:text-base">
        {["Trending", "Music", "Gaming", "News"].map((label) => (
          <li
            key={label}
            tabIndex={0}
            role="button"
            className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
          >
            {label}
          </li>
        ))}
      </ul>

      <hr className="my-3 border-gray-200 dark:border-gray-700" />

      <h2 className="font-semibold text-sm md:text-base mb-1 text-gray-900 dark:text-gray-100">
        Library
      </h2>
      <ul className="space-y-1 text-sm md:text-base">
        {["History", "Watch later", "Liked videos"].map((label) => (
          <li
            key={label}
            tabIndex={0}
            role="button"
            className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
 
