import React from "react";
import Button from "./Button";

const list = [
  { label: "Trending", to: "/" },
  { label: "Gaming", to: "/gaming" },
  { label: "Music", to: "/music" },
  { label: "Sports", to: "/sports" },
  { label: "Podcast", to: "/podcast" },
  { label: "News", to: "/news" },
  { label: "Shorts", to: "/shorts" },
];


const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar py-2 px-2 md:px-4 bg-white dark:bg-gray-800 top-[3.5rem] z-10">
      {list.map((name) => (
        <Button key={name.label} name={name.label} to={name.to} />
      ))}
    </div>
  );
};

export default ButtonList;
