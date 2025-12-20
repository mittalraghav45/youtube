import React, { useEffect, useState } from "react";
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
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col-reverse overflow-y-hidden overflow-y-scroll">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
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
          type="text"
          className="w-96 px-2"
          value={liveMsg}
          onChange={(e) => {
            setLiveMsg(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
