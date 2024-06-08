import React from "react";
import "./style.scss";
import StyleButton from "@/components/Button";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="main-content">
          <h2 color="white">모든 것들을</h2>
          <h2 color="white">새롭게 버리는 공식, 쓱쓱싹싹</h2>
        </div>
        <p color="white">주민센터 방문 및 스티커 출력 없이도</p>
        <p color="white">모바일로 대형폐기물을 간편하게 수거 신청 해보세요.</p>
        <p color="white">쓱쓱싹싹과 더 나은 일상을 만들어 드립니다.</p>
        <div className="flex-wrap">
          <StyleButton className="flex-button">수거 신청하기</StyleButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
