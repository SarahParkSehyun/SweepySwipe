import React, { ChangeEvent, useState } from "react";
import "./style.scss";
const Settings = () => {
  const [time, setTime] = useState("");
  const [dayCycle, setDayCycle] = useState(0);

  const handleChangeInput =
    (type: "time" | "day") => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (type === "day") {
        const replaceValue = value.replace(/[^-0-9]/g, "");
        setDayCycle(Number(replaceValue));
      } else {
        setTime(value);
      }
    };
  return (
    <div className="setting-container">
      <div className="setting-form">
        <h4>알림 설정</h4>
        <form>
          <div className="col">
            <label>시간</label>
            <input type="time" onChange={handleChangeInput("time")} />
          </div>
          <div className="col">
            <label>주기(일)</label>
            <input type="text" onChange={handleChangeInput("day")} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
