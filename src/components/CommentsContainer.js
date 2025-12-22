import { useEffect, useState } from "react";
import { COMMENTS_API,USER_ICON } from "../utils/constants";

const CommentsList = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  const getComments = async (id) => {
    const res = await fetch(COMMENTS_API + id);
    const json = await res.json();

    const mapped =
      json.items?.map((item) => {
        const top = item.snippet.topLevelComment.snippet;
        return {
          id: item.id,
          author: top.authorDisplayName,
          text: top.textDisplay,
        };
      }) || [];

    // 2) store in state
    setComments(mapped);
  };

  useEffect(() => {
    if (videoId) {
      getComments(videoId);
    } else {
      console.log("No videoId yet");
    }
  }, [videoId]);

    return (
    <div>
      {comments.map((c) => (
        <div
          key={c.id}
          className="flex shadow-sm bg-gray-100 p-2 rounded my-2"
        >
          <img
            className="w-10 h-10 rounded-full"
            alt="cmt-img"
            src={USER_ICON}
          />
          <div className="px-3">
            <p className="font-bold text-sm text-gray-900">{c.author}</p>
            <p className="text-gray-700 text-sm">{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


const CommentsContainer = ({ videoId }) => {
  return (
    <div className="mt-4 p-2 md:p-3 bg-white rounded-lg">
      <h1 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
        Comments
      </h1>
      <CommentsList videoId={videoId} />
    </div>
  );
};

export default CommentsContainer;
