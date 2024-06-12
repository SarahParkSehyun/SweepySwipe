import { useEffect, useState } from "react";
import "./style.scss";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ITrashInfo {
  id: number;
  name: string;
  recyclable: boolean;
  trashTypeId: number;
}

const DetailGuide = () => {
  const [trashInfo, setTrashInfo] = useState<ITrashInfo[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const getTrashInfo = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/trash/types/${id}/items`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (!response.ok) return;
      setTrashInfo(data || []); // 데이터가 없는 경우 빈 배열로 초기화
    } catch (error) {
      console.error("getTrashInfo Error:", error);
    }
  };

  useEffect(() => {
    const id = location.state?.trash?.id;
    if (!id) return navigate(-1);
    getTrashInfo(id);
  }, [location.state, navigate]);

  const ListCard = ({ data }: { data: ITrashInfo }) => {
    return (
      <div className="detail-guide-list-card">
        <div className="content">
          <div className="label">{data.name}</div>
          <div className="method">
            {data.recyclable ? (
              <div className="green">재활용 가능</div>
            ) : (
              <div>재활용 불가능</div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const SliderCard = ({ data }: { data: { text: string; title?: string } }) => {
    return (
      <div className="slider-card">
        {data.title && <div className="title">{data.title}</div>}
        <div className="text">{data.text}</div>
      </div>
    );
  };

  const { trash } = location.state || {};
  if (!trash) return null;

  return (
    <div className="guidebook-container">
      <div className="detail-guide-title">{`${trash.name} 분리배출 가이드북`}</div>
      <div className="detail-guide-slider-area">
        <Slider {...settings} className="slider">
          {trash.disposalMethod && (
            <SliderCard
              data={{
                text: trash.disposalMethod,
              }}
            />
          )}
          {trash.caution && (
            <SliderCard
              data={{
                title: "유의사항",
                text: trash.caution,
              }}
            />
          )}
        </Slider>
      </div>
      <div className="divider" />
      <div className="detail-guide-list-area">
        <div className="detail-guide-list-title">{`${trash.name} 전체`}</div>
        {trashInfo.length ? (
          trashInfo.map((v) => <ListCard key={v.id} data={v} />)
        ) : (
          <div className="empty-text">데이터가 없습니다.</div>
        )}
      </div>
    </div>
  );
};

export default DetailGuide;
