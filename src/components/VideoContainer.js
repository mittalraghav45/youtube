import React, { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link, useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query") || "";

  const getVideos = async (pageToken) => {
    if (loading) return;
    setLoading(true);
    setError("");

    //search page /results
    let url = "";
    if (query) {
      url = SEARCH_API + encodeURIComponent(query);
      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }
    } else {
      url = YOUTUBE_VIDEOS_API;
      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }
    }

    try {
      const data = await fetch(url);
      if (!data.ok) throw new Error("Failed to load videos");
      const json = await data.json();

      const nextItems = json.items || [];
      setVideos((prev) => {
        const seen = new Set(
          prev
            .map((v) =>
              typeof v.id === "string" ? v.id : v.id?.videoId
            )
            .filter(Boolean)
        );
        const fresh = nextItems.filter((item) => {
          const id =
            typeof item.id === "string" ? item.id : item.id?.videoId;
          return id && !seen.has(id);
        });
        return [...prev, ...fresh];
      });
      setNextPageToken(json.nextPageToken || null);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setVideos([]); // Clear previous videos
    setNextPageToken(null);
    getVideos(); // Load new search/home videos
  }, [query]); // Re-run when search query changes

  const handleScroll = (e) => {
    if (loading || videos.length === 0) return;
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (
      scrollHeight - scrollTop - clientHeight < 200 &&
      nextPageToken &&
      !loading
    ) {
      getVideos(nextPageToken);
    }
  };

  return (
    <div
      className="h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-gray-100"
      onScroll={handleScroll}
    >
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {videos
          .map((video, index) => {
            const videoId =
              typeof video.id === "string" ? video.id : video.id?.videoId;
            if (!videoId) return null;
            return (
              <Link key={index + videoId} to={"/watch?v=" + videoId}>
                <VideoCards info={video} />
              </Link>
            );
          })
          .filter(Boolean)}
      </div>
      {!loading && !error && videos.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-6">
          No results found.
        </p>
      )}
      {error && (
        <p className="text-center text-sm text-red-500 dark:text-red-400 py-6">
          {error}
        </p>
      )}
      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-4">
          Loading more videos.
        </p>
      )}
    </div>
  );
};
export default VideoContainer;
