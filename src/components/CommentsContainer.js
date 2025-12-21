import { USER_ICON } from "../utils/constants";

const commentsData = [
  { name: "Raghav", text: "Lorem ipsum", replies: [] },
  {
    name: "Raghav",
    text: "Lorem ipsum",
    replies: [
      {
        name: "Raghav",
        text: "Lorem ipsum",
        replies: [],
      },
      {
        name: "Raghav",
        text: "Lorem ipsum",
        replies: [
          {
            name: "Raghav",
            text: "Lorem ipsum",
            replies: [],
          },
        ],
      },
    ],
  },
  // extra dummy comments
  { name: "Lakshay", text: "Lorem ipsum from Lakshay", replies: [] },
  {
    name: "Vipin",
    text: "Lorem ipsum from Vipin",
    replies: [
      {
        name: "Dipti",
        text: "Reply from Dipti",
        replies: [],
      },
    ],
  },
  { name: "Dipti", text: "Standalone comment from Dipti", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded my-2">
      <img className="w-10 h-10 rounded-full" alt="cmt-img" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold text-sm text-gray-900">{name}</p>
        <p className="text-gray-700 text-sm">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border-l border-gray-300 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="mt-4 p-2 md:p-3 bg-white rounded-lg">
      <h1 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
        Comments
      </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
