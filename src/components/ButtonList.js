import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Cooking",
  "Movies",
  "Tech",
  "Learning",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto no-scrollbar py-2 px-2 md:px-4 bg-white dark:bg-gray-800 top-[3.5rem] z-10">
      {list.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;
