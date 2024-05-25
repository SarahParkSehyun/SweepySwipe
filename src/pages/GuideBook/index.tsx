import React from "react";
import "./style.scss";
import { PUBLIC_IMG_PATH } from "@/config";

const GuideBook = () => {
  const Card = ({ label, imgSrc }: { label: string; imgSrc: string }) => {
    return (
      <div className="guidebook-card">
        <img src={imgSrc} />
        <div className="label">{label}</div>
      </div>
    );
  };
  return (
    <div className="guidebook-container">
      <div className="guidebook-title">
        알아보고 싶은 쓰레기를 선택해 주세요
      </div>
      <div className="guidebook-card-area">
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
        <Card
          label="일반쓰레기"
          imgSrc={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
        />
      </div>
    </div>
  );
};

export default GuideBook;
