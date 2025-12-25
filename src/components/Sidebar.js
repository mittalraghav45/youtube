
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-full md:w-56 lg:w-64 p-3 md:p-4 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-hidden">
      <ul className="space-y-1 text-sm md:text-base">
        <Link  to="/" className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Home</Link>
        <Link
          to="/shorts"
          className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
        >
          Shorts
        </Link>
        
      </ul>

      <hr className="my-3 border-gray-200 dark:border-gray-700" />

      <h2 className="font-semibold text-sm md:text-base mb-1 text-gray-900 dark:text-gray-100">
        Explore
      </h2>
      <ul className="space-y-1 text-sm md:text-base">
        {[
          { label: "Sports", to:'/sports' },
          { label: "Podcast", to:'/podcast' },
          { label: "Music", to: "/music" },
          { label: "Gaming" ,to:'/gaming'},
          { label: "News & Politics",to:'/news' },
        ].map((item) =>
          item.to ? (
            <Link
              key={item.label}
              to={item.to}
              className="block text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
            >
              {item.label}
            </Link>
          ) : (
            <li
              key={item.label}
              tabIndex={0}
              role="button"
              className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 cursor-pointer"
            >
              {item.label}
            </li>
          )
        )}
      </ul>

      <hr className="my-3 border-gray-200 dark:border-gray-700" />

      
    </div>
  );
};

export default Sidebar;
 
