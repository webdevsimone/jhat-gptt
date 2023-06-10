import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";

const Chat = () => {
  const chatProps = useMultiChatLogic {
    import: VITE_PROJECT_ID, 

  }
  return <div>chat</div>;
};
export default Chat;
