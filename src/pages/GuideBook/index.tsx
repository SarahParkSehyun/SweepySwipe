import { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import PathContants from "@/routers/pathConstants";

interface ITrashList {
  id: number;
  name: string;
  disposalInstructions: string;
}
const GuideBook = () => {
  const [trashList, setTrashList] = useState<ITrashList[]>([]);
  const navigate = useNavigate();

  const getTrashList = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/trash-items", {
        method: "GET",
        headers: {
          Accept: "text/html",
        },
      });

      const data = await response.json();

      if (!response.ok) return;
      setTrashList(data.result);
    } catch (error) {
      console.error("getTrashList Error:", error);
    }
  };

  const handleClickCard = (id: number) => {
    if (!id) return;
    navigate(`${PathContants.DetailGuide}?id=${id}`);
  };

  useEffect(() => {
    getTrashList();
  }, []);

  const Card = ({ name, id }: { name: string; id: number }) => {
    return (
      <div className="guidebook-card" onClick={() => handleClickCard(id)}>
        <div className="label">{name}</div>
      </div>
    );
  };

  return (
    <div className="guidebook-container">
      <div className="guidebook-title">
        알아보고 싶은 쓰레기를 선택해 주세요
      </div>
      {trashList.length ? (
        <div className="guidebook-card-area">
          {trashList.map((trash) => (
            <Card name={trash.name} id={trash.id} />
          ))}
        </div>
      ) : (
        <div className="empty-text">데이터가 없습니다.</div>
      )}
    </div>
  );
};

export default GuideBook;
