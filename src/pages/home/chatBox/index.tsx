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
    const currentQuestion = question;
    pushChatData("question", currentQuestion);
    setQuestion(""); // Clear the input field immediately after storing the current question

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/chat/question",
        {
          question: currentQuestion,
        }
      );
      pushChatData("answer", response.data.choices[0].message.content);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const pushChatData = (type: ChatType, message: string) => {
    setChatList((prevChatList) => [...prevChatList, { type, message }]);
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
            {chatList.map((item, index) => {
              return (
                <div key={index} className={`chat-item ${item.type}`}>
                  {item.message}
                </div>
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
            <img src="/images/enter.svg" alt="send" />
          </button>
        </div>
      </div>
      <Fab
        color="primary"
        aria-label="add"
        className="floating-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src={`/images/${isOpen ? "close" : "comment"}.svg`} alt="toggle" />
      </Fab>
    </div>
  );
};

export default ChatBox;
