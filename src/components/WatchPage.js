import   { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId=searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full dark:bg-gray-900 dark:text-gray-100">
      <div className="flex-1 lg:w-3/5 p-2 md:p-4 space-y-4">
        <div className="w-full aspect-video rounded-xl overflow-hidden bg-black">
          <iframe
            className="w-full h-full"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <CommentsContainer videoId={videoId}/>
      </div>

      <div className="w-full lg:w-2/5 p-2 md:p-4 lg:border-l border-gray-200 dark:border-gray-700">
        <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Live Chat</h2>
        <LiveChat />
      </div>
    </div>
  );
};

export default WatchPage;

 
