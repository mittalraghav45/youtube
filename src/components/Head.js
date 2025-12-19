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
    const timer = setTimeout(
      () => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getSearchSuggestions(searchQuery);
        }
      },

      200
    ); // 200 ms debounce

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async () => {
    
    console.log("API CALL :", searchQuery);

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
    <div className="grid grid-flow-col p-5 m-2 shadow">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          src={HAMBUR_LOGO}
          alt="hamburger-logo"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img className="h-16 mx-2 " src={YT_LOGO} alt="yt-logo" />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className="border border-gray-400 px-4 py-2 rounded-l-full w-1/2"
            placeholder="Search"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="bg-white shadow  w-[14rem] px-5 absolute py-2">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user-icon" />
      </div>
    </div>
  );
};

export default Head;
