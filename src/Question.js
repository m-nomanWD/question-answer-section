import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  // const { title, info, id } = question;
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState("");
  const handleInfo = () => {
    setToggle(!toggle);
    text ? setText("") : setText(info);
  };
  return (
    <div className="question">
      <header>
        <h4>{title}</h4>
        <div className="btn">
          {toggle ? (
            <AiOutlineMinus
              onClick={() => {
                handleInfo();
              }}
            />
          ) : (
            <AiOutlinePlus
              onClick={() => {
                handleInfo();
              }}
            />
          )}
        </div>
      </header>
      <p>{text}</p>
    </div>
  );
};

export default Question;
