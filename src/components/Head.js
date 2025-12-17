import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { HAMBUR_LOGO, USER_ICON, YT_LOGO } from "../utils/constants";
import { useEffect, useState } from "react";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery,setSearchQuery]=useState('')
  console.log(searchQuery)

  useEffect(()=>{

  },[searchQuery])

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
        <img
          className="h-16 mx-2 "
          src={YT_LOGO}
          alt="yt-logo"
        /></a>
      </div>
      <div className="col-span-10 px-10">
        <input
          type="text"
          value={searchQuery}
          onChange={(e)=>setSearchQuery(e.target.value)}
          className="border border-gray-400 px-4 py-2 rounded-l-full w-1/2" placeholder="Search something"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"> 🔍 </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src={USER_ICON}
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Head;
