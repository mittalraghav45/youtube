import React, { useEffect, useState } from "react";
import { MUSIC_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

const MusicContainer = () => {
  const [music, setMusic] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMusic = async (pageToken) => {
    if (loading) return;
    setLoading(true);
    setError("");
    let url = MUSIC_API;
    if (pageToken) url += `&pageToken=${pageToken}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to load music");
      const json = await res.json();
      const items = json.items || [];
      setMusic((prev) => [...prev, ...items]);
      setNextPageToken(json.nextPageToken || null);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  const handleScroll = (e) => {
    if (loading || !nextPageToken) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop - clientHeight < 200) {
      fetchMusic(nextPageToken);
    }
  };

  return (
    <>
    <ButtonList/>
    <div
      className="h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
      onScroll={handleScroll}
    >
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {music.map((video, index) => {
          const videoId =
            typeof video.id === "string" ? video.id : video.id?.videoId;
          if (!videoId) return null;
          return (
            <Link key={index + videoId} to={`/watch?v=${videoId}`}>
              <VideoCards info={video} />
            </Link>
          );
        })}
      </div>
      {!loading && !error && music.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-6">
          No music found.
        </p>
      )}
      {error && (
        <p className="text-center text-sm text-red-500 dark:text-red-400 py-6">
          {error}
        </p>
      )}
      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-4">
          Loading music...
        </p>
      )}
    </div>
    </>
  );
};

export default MusicContainer;
