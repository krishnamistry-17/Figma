import React, { useEffect, useRef, useState } from "react";
import avatr from "../assets/images/avtar.png";
import { useAuth } from "./Context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [showreadMore, setShowReadMore] = useState(false);

  const limit = 100;

  const shouldTruncate = message.text.length > limit;

  const visibleText =
    isOpen || !shouldTruncate
      ? message.text
      : message.text.slice(0, limit) + "...";

  const ref = useRef();
  const refpara = useRef(null);

  useEffect(() => {
    if (refpara.current) {
      const isOverflowing =
        refpara.current.scrollHeight > refpara.current.clientHeight;
      setShowReadMore(isOverflowing);
    }
  }, []);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isCurrentUser = message.senderId === currentUser.uid;

 

  
  return (
    <div
      ref={ref}
      className={`message  flex gap-[18px] ${
        isCurrentUser ? "flex-row-reverse" : "sender"
      }`}
    >
   

      <div className="flex md:max-w-[50%] max-w-[73%]  gap-[20px] flex-col">
        <p
          className="
    bg-white p-[10px] 
    text-[14px] md:text-[14px] xl:text-[16px]
    rounded-r-[10px] rounded-b-[10px] mb-[10px]
    max-w-max break-words
  "
        >
          {isOpen || message.text.length <= 100
            ? message.text
            : message.text.slice(0, 100) + "..."}

          {message.text.length > 100 && (
            <span
              className="text-blue-600 hover:underline cursor-pointer ml-[4px]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "Read less" : "Read more"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Message;
