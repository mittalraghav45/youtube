import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBUR_LOGO,
  USER_ICON,
  YT_LOGO,
  YOUTUBE_SUGGESTIONS_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [theme, setTheme] = useState("light"); // just in memory
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(searchQuery);
      }
    }, 200); // 200 ms debounce

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  // theme dark ? light
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    // navigate(`/results?search_query=${encodeURIComponent(searchQuery.trim())}`);
  };
  const handleSearch = (val) => {
    console.log("value :", val);
    setSearchQuery(val);
    setShowSuggestions(false);
  };
  return (
    <div className="grid grid-cols-12 items-center gap-3 p-3 md:p-5 shadow sticky top-0 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 z-20">
      <div className="flex items-center col-span-2 md:col-span-2">
        <img
          className="h-6 md:h-8 cursor-pointer"
          src={HAMBUR_LOGO}
          alt="hamburger-logo"
          onClick={toggleMenuHandler}
        />
        <a href="/" className="ml-2">
          <img className="h-8 md:h-10 lg:h-12" src={YT_LOGO} alt="yt-logo" />
        </a>
      </div>

      {/* Center: search */}
      <div className="col-span-8 md:col-span-9 px-1 md:px-6 relative">
        <form onSubmit={handleSearchSubmit} className="flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-50 px-3 py-1.5 md:px-4 md:py-2 rounded-l-full w-full md:w-3/4 lg:w-1/2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 dark:placeholder-gray-300"
            placeholder="Search"
          />
          <button className="border border-gray-300 dark:border-gray-600 px-4 md:px-5 py-1.5 md:py-2 rounded-r-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
            Search
          </button>
        </form>
{/* //suggestions dropdown shown here  */}
        {showSuggestions && (
          <div className="bg-white dark:bg-gray-800 shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto mt-1 rounded-lg border border-gray-100 dark:border-gray-700 absolute left-1/2 -translate-x-1/2">
            <ul className="py-2 max-h-64 overflow-y-auto">
              {suggestions.map((s) => (
                <li key={s}  value={s}
                  className="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 
                  cursor-pointer flex items-center gap-2" >
                  <span>🔍</span>
                  <span value={s} className="border border-red-300"  
                  onMouseDown={() => handleSearch(s)}>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: user icon + dark mode */}
      <div className="col-span-2 md:col-span-1 flex justify-end items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className={`flex items-center w-12 h-6 rounded-full p-1 transition-colors ${
            theme === "dark" ? "bg-yellow-400" : "bg-gray-400"
          }`}
        >
          <span
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
        <img className="h-8 w-8 rounded-full" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;

