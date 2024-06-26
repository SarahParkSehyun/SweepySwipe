import React from "react";
import "./style.scss";
import Slick, { Settings } from "react-slick";
import ReviewCard from "./reviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CountUp from "react-countup";

const ReviewSection = () => {
  const settings: Settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    swipeToSlide: true,
    slidesToShow: 3,
    speed: 500,
    dots: false,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <section className="review-section-container">
      <div className="title-wrap">
        <p className="section-title">이미 수많은 사람들이 경험했습니다</p>
        <h2 className="section-des">
          <CountUp
            start={0}
            end={1300}
            duration={2.75}
            separator=","
            decimal=","
          ></CountUp>
          건*의 신청 건수,
        </h2>
        <h2 className="section-des">그리고 리뷰가 증명합니다.</h2>
      </div>
      <div className="carousel-slider">
        <Slick {...settings} variableWidth={true}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </Slick>
      </div>
    </section>
  );
};

export default ReviewSection;
