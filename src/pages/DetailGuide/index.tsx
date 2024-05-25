import React from "react";
import "./style.scss";
import { PUBLIC_IMG_PATH } from "@/config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DetailGuide = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const ListCard = ({ data }: { data: { imgSrc: string; label: string } }) => {
    return (
      <div className="detail-guide-list-card">
        <img src={data.imgSrc} />
        <div className="content">
          <div className="label">{data.label}</div>
          <div className="method">
            <div>재활용 불가능</div>
            <div>분리필요</div>
            <div className="green">재활용 가능</div>
          </div>
          <div className="type">
            <div className="blue">일반</div>
            <div className="blue">대형폐기물</div>
          </div>
        </div>
      </div>
    );
  };
  const SliderCard = ({
    data,
  }: {
    data: { imgSrc: string; text: string; title?: string };
  }) => {
    return (
      <div className="slider-card">
        <img src={data.imgSrc} />
        <div className="title">{data.title}</div>
        <div className="text">{data.text}</div>
      </div>
    );
  };
  return (
    <div className="guidebook-container">
      <div className="detail-guide-title">일반쓰레기 분리배출 가이드북</div>
      <div className="detail-guide-slider-area">
        <Slider {...settings} className="slider">
          <SliderCard
            data={{
              text: "재활용이 되지 않거나 음식물 쓰레기가 아닌 쓰레기는 종량제봉투에 모아 배출해요.",
              imgSrc: `${PUBLIC_IMG_PATH}/clean_img_4.webp`,
            }}
          />
          <SliderCard
            data={{
              title: "유의사항",
              text: "종량제봉투에 재활용품이나 음식물을 혼합하여 배출할 시에는 과태료가 부과되니 주의해야해요.",
              imgSrc: `${PUBLIC_IMG_PATH}/clean_img_4.webp`,
            }}
          />
        </Slider>
      </div>
      <div className="divider" />
      <div className="detail-guide-list-area">
        <div className="detail-guide-list-title">일반쓰레기 전체</div>
        <ListCard
          data={{
            label: "우산",
            imgSrc: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Umbrella_hat.jpg/800px-Umbrella_hat.jpg`,
          }}
        />
        <ListCard
          data={{
            label: "일반쓰레기",
            imgSrc: `${PUBLIC_IMG_PATH}/clean_img_4.webp`,
          }}
        />
        <ListCard
          data={{
            label: "우산",
            imgSrc: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Umbrella_hat.jpg/800px-Umbrella_hat.jpg`,
          }}
        />
        <ListCard
          data={{
            label: "우산",
            imgSrc: `https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Umbrella_hat.jpg/800px-Umbrella_hat.jpg`,
          }}
        />
      </div>
    </div>
  );
};

export default DetailGuide;
