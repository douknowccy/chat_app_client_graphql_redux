import React from "react";
import { useParams } from "react-router-dom";
interface ParamTypes {
  id: string;
}
const Chat = () => {
  const { id } = useParams<ParamTypes>();
  return <div>chat:{id}</div>;
};

export default Chat;
