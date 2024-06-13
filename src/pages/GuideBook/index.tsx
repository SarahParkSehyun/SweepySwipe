import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import PathContants from "@/routers/pathConstants";

interface ITrashList {
  id: number;
  name: string;
  caution: string;
  disposalMethod: string;
}

const GuideBook = () => {
  const [trashList, setTrashList] = useState<ITrashList[]>([]);
  const navigate = useNavigate();

  const getTrashList = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/trash/types", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) return;
      setTrashList(data); // data.result 대신 data 사용
    } catch (error) {
      console.error("getTrashList Error:", error);
    }
  };

  const handleClickCard = (trash: ITrashList) => {
    if (!trash.id) return;
    navigate(`${PathContants.DetailGuide}`, {
      state: { trash },
    });
  };

  useEffect(() => {
    getTrashList();
  }, []);

  const Card = ({ trash }: { trash: ITrashList }) => {
    return (
      <div className="guidebook-card" onClick={() => handleClickCard(trash)}>
        <div className="label">{trash.name}</div>
      </div>
    );
  };

  return (
    <div className="guidebook-container">
      <div className="guidebook-title">
        알아보고 싶은 쓰레기를 선택해 주세요
      </div>
      {trashList && trashList.length ? (
        <div className="guidebook-card-area">
          {trashList.map((trash) => (
            <Card key={trash.id} trash={trash} />
          ))}
        </div>
      ) : (
        <div className="empty-text">데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default GuideBook;
