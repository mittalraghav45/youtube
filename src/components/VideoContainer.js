import React, { useEffect, useState } from "react";
import { SEARCH_API, YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link,useSearchParams } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query") || "";

  const getVideos = async (pageToken) => {
    if (loading) return;
    setLoading(true);

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
    const data = await fetch(url);
    const json = await data.json();
    setVideos((prev) => [...prev, ...(json.items || [])]);
    setLoading(false);
    setNextPageToken(json.nextPageToken || null);
  };

  //inintial load
  // useEffect(() => {
  //   getVideos();
  // }, []);

  useEffect(() => {
  setVideos([]); // Clear previous videos
  getVideos();   // Load new search/home videos
}, [query]); // Re-run when search query changes


  const handleScroll = (e) => {
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
    <div className="h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-gray-100" onScroll={handleScroll}>
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {videos.map((video,index) => (
          <Link key={index+video.id} to={"/watch?v=" + video.id}>
            <VideoCards info={video} />
          </Link>
        ))}
      </div>
      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-4">
          Loading more videos…
        </p>
      )}
    </div>
  );
};
export default VideoContainer;
