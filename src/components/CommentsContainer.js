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
      { name: "Dipti", text: "Reply from Dipti", replies: [] },
    ],
  },
  { name: "Dipti", text: "Standalone comment from Dipti", replies: [] },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded my-2">
      <img className="w-12 h-8" alt="cmt-img" src={USER_ICON} />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border ml-5 border-l-black">
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="text-2xl font-bold"> Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
