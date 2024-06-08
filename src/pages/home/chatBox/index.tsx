import { Fab } from "@mui/material";
import React, { useState } from "react";
import "./style.scss";
const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="chat-container">
      <div className={`chat-box ${!isOpen ? "close" : ""}`}>
        <header className="title-area">분리수거 챗봇</header>
        <div className="chat-area"></div>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        className="floating-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/images/comment.svg" />
      </Fab>
    </div>
  );
};

export default ChatBox;
