import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import StyleButton from "@/components/Button";
enum EDayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

const Settings = () => {
  const apiUrl = "http://localhost:8080/members/alarm";
  const [time, setTime] = useState("");
  const [enabled, setEnabled] = useState(false);
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [dayOfWeek, setDayOfWeek] = useState<EDayOfWeek>(EDayOfWeek.MONDAY);
  const DayOfTheWeek = [
    {
      label: "월요일",
      value: EDayOfWeek.MONDAY,
    },
    {
      label: "화요일",
      value: EDayOfWeek.TUESDAY,
    },
    {
      label: "수요일",
      value: EDayOfWeek.WEDNESDAY,
    },
    {
      label: "목요일",
      value: EDayOfWeek.THURSDAY,
    },
    {
      label: "금요일",
      value: EDayOfWeek.FRIDAY,
    },
    {
      label: "토요일",
      value: EDayOfWeek.SATURDAY,
    },
    {
      label: "일요일",
      value: EDayOfWeek.SUNDAY,
    },
  ];
  const [userInfo, setUserInfo] = useState<{
    id: number;
    name: string;
    email: string;
  } | null>(null);
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token!}`,
      },
      body: JSON.stringify({
        id: userInfo!.id,
        name: userInfo!.name,
        email: userInfo!.email,
        enabled,
        dayOfWeek,
        time,
      }),
    })
      .then(() => {
        alert("저장완료했습니다.");
      })
      .catch(() => {
        alert("저장실패하였습니다");
      });
  };
  const getUseNotifySettingData = async () => {
    await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token!}`,
      },
    }).then(async (response) => {
      const result = await response.json();
      setTime(result.time);
      setEnabled(result.enabled);
      setDayOfWeek(result.dayOfWeek);
      setUserInfo({
        id: result.id,
        email: result.email,
        name: result.name,
      });
    });
  };
  const handleChangeInput =
    (type: "time" | "enabled") => (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (type === "enabled") {
        const checked = e.target.checked;
        setEnabled(checked);
      } else {
        setTime(value);
      }
    };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setDayOfWeek(e.target.value as EDayOfWeek);
  };
  useEffect(() => {
    if (!token) {
      alert("로그인 후 접근가능합니다");
      navigate(-1);
      return;
    }
    getUseNotifySettingData();
  }, [getUseNotifySettingData]);
  return (
    <div className="setting-container">
      <div className="setting-form">
        <h4>알림 설정</h4>
        <form onSubmit={handleSubmit}>
          <div className="col">
            <label>알림발송여부</label>
            <input
              type="checkbox"
              checked={enabled}
              onChange={handleChangeInput("enabled")}
            />
          </div>
          <div className="col">
            <label>시간</label>
            <input
              className="input-box"
              type="time"
              value={time}
              onChange={handleChangeInput("time")}
            />
          </div>
          <div className="col">
            <label>요일</label>
            <select defaultValue={dayOfWeek} onChange={handleChangeSelect}>
              {DayOfTheWeek.map((item) => (
                <option value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
          <StyleButton type="submit" className="submit-button">
            저장
          </StyleButton>
        </form>
      </div>
    </div>
  );
};

export default Settings;
