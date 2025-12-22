import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  HAMBUR_LOGO,
  USER_ICON,
  YT_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

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
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
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

  return (
    
    <div className="grid grid-cols-12 items-center gap-3 p-3 md:p-5 shadow sticky top-0 bg-white z-20">
      
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
        <div className="flex justify-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-300 px-3 py-1.5 md:px-4 md:py-2 rounded-l-full w-full md:w-3/4 lg:w-1/2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search"
          />
          <button className="border border-gray-300 px-4 md:px-5 py-1.5 md:py-2 rounded-r-full bg-gray-100 hover:bg-gray-200">
            🔍
          </button>
        </div>

        {showSuggestions  && (
          <div className="bg-white shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto mt-1 rounded-lg border border-gray-100 absolute left-1/2 -translate-x-1/2">
            <ul className="py-2 max-h-64 overflow-y-auto">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <span>🔍</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: user icon */}
      <div className="col-span-2 md:col-span-1 flex justify-end">
        <img className="h-8 w-8 rounded-full" src={USER_ICON} alt="user-icon" />
      </div>
    </div> 
  );
};

export default Head;
