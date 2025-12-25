import React, { useEffect, useState } from "react";
import { NEWS_API } from "../utils/constants";
import VideoCards from "./VideoCards";
import { Link } from "react-router-dom";

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(NEWS_API);
        if (!res.ok) throw new Error("Failed to load shorts");
        const json = await res.json();
        const items = (json.items || []).filter((item) => {
          const id =
            typeof item.id === "string" ? item.id : item.id?.videoId;
          return Boolean(id);
        });
        setNews(items);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="h-screen overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {news.map((video, index) => {
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
      {!loading && !error && news.length === 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-6">
          No shorts found.
        </p>
      )}
      {error && (
        <p className="text-center text-sm text-red-500 dark:text-red-400 py-6">
          {error}
        </p>
      )}
      {loading && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-300 py-4">
          Loading News...
        </p>
      )}
    </div>
  );
};

export default NewsContainer;
