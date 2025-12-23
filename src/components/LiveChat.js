import  { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateNames, makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState();
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //api polling
    //   console.log("first");
      dispatch(
        addMessage({
          name: generateNames(),
          message: makeRandomMessage(30),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-gray-300 dark:border-gray-700 bg-slate-100 dark:bg-gray-800 rounded-lg flex flex-col-reverse overflow-y-hidden overflow-y-scroll">
        <div className="flex-1 p-2 md:p-3 space-y-2 overflow-y-auto">
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMsg);
          dispatch(
            addMessage({
              name: "Raghav",
              message: liveMsg,
            })
          );
          setLiveMsg('');
        }}
      >
        <input
        className='flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100'
          type="text" 
          value={liveMsg}
           placeholder="Type a message…"
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button
        type='submit'
          className="px-3 md:px-4 py-1.5 text-sm font-medium bg-blue-500 text-white rounded-full hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">Send</button>
      </form>
    </>
  );
};

export default LiveChat;  
