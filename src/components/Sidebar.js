
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-full md:w-56 lg:w-64 p-3 md:p-4 border-r border-gray-200 bg-white overflow-y-auto">
      <ul className="space-y-1 text-sm md:text-base">
        <li className="font-semibold mb-1 text-gray-900">Home</li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Shorts
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Subscriptions
        </li>
      </ul>

      <hr className="my-3 border-gray-200" />

      <h2 className="font-semibold text-sm md:text-base mb-1 text-gray-900">
        Explore
      </h2>
      <ul className="space-y-1 text-sm md:text-base">
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Trending
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Music
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Gaming
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          News
        </li>
      </ul>

      <hr className="my-3 border-gray-200" />

      <h2 className="font-semibold text-sm md:text-base mb-1 text-gray-900">
        Library
      </h2>
      <ul className="space-y-1 text-sm md:text-base">
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          History
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Watch later
        </li>
        <li className="text-gray-700 hover:bg-gray-100 rounded px-2 py-1 cursor-pointer">
          Liked videos
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
 