import React, { useEffect, useState } from "react";
import { MUSIC_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const MusicContainer = () => {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMusic = async () => {
    setLoading(true);
    const res = await fetch(MUSIC_API);
    const json = await res.json();
    const items = (json.items || []).filter((item) => {
      const id = typeof item.id === "string" ? item.id : item.id?.videoId;
      return Boolean(id);
    });
    setMusic(items);
    setLoading(false);
  };
  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {music.map((video, index) => {
          const videoId =
            typeof video.id === "string" ? video.id : video.id?.videoId;
          if (!videoId) return null;
          return (
            <Link key={index + videoId} to={"/watch?v=" + videoId}>
              <VideoCards info={video} />
            </Link>
          );
        })}
      </div>
      {!loading && music.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-6">
          No music found.
        </p>
      )}

      <p className="text-center text-sm text-red-500 dark:text-red-400 py-6"></p>

      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-4">
          Loading shorts...
        </p>
      )}
    </div>
  );
};

export default MusicContainer;
