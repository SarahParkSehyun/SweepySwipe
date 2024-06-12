import { Fab } from "@mui/material";
import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import "./style.scss";
import axios from "axios";

type ChatType = "answer" | "question";
interface IChatData {
  type: ChatType;
  message: string;
}

const ChatBox = () => {
  const [chatList, setChatList] = useState<IChatData[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSendQuestion = async () => {
    if (isLoading || !question) return;
    setIsLoading(true);
    pushChatData("question", question);
    try {
      const response = await axios.post(
        "http://localhost:9090/api/v1/chat/question",
        {
          question: question,
        }
      );
      pushChatData("answer", response.data.choices[0].message.content);
      setQuestion("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setQuestion("");
    }
  };

  const pushChatData = (type: ChatType, message: string) => {
    const copiedList = [...chatList];
    copiedList.push({
      type,
      message,
    });
    setChatList(copiedList);
  };

  const handleChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuestion(value);
  };
  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isLoading && question && e.key === "Enter") {
      handleSendQuestion();
    }
  };

  return (
    <div className="chat-container">
      <div className={`chat-box ${!isOpen ? "close" : ""}`}>
        <header className="title-area">분리수거 챗봇</header>
        <div className="chat-area">
          <div className="chat-list">
            {chatList.map((item) => {
              return (
                <div className={`chat-item ${item.type}`}>{item.message}</div>
              );
            })}
          </div>
        </div>
        <div className="input-area">
          <div className={`loading ${isLoading ? "show" : "hide"}`}>
            답변중...
          </div>
          <input
            type="text"
            value={question}
            onKeyDown={handleEnter}
            onChange={handleChangeQuestion}
          />
          <button onClick={handleSendQuestion}>
            <img src="/images/enter.svg" />
          </button>
        </div>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        className="floating-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={`/images/${isOpen ? "close" : "comment"}.svg`} />
      </Fab>
    </div>
  );
};

export default ChatBox;
