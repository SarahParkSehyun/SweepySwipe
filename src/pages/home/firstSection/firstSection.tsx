import React from "react";
import "./style.scss";
import StyleButton from "@/components/Button";
import { PUBLIC_IMG_PATH } from "@/config";
const FirstSection = () => {
  return (
    <div className="section-container">
      <p>어떻게 버려야 할 지 고민은 그만</p>
      <h2>빼기가 만드는 새롭게 버리는 공식들을 통해</h2>
      <h2>폐기물을 간편하게 버려보세요.</h2>
      <StyleButton className="detail-button">자세히보기</StyleButton>
      <div className="flex-style-box">
        <div className="flex-row-box">
          <div className="content-box">
            <div className="content-flex-wrap">
              <h2
                color="#ffffff"
                className="typography__H2-sc-1q4j4tg-1 bsJFyY"
              >
                직접버림
              </h2>
              <div
                style={{
                  display: "inline-block",
                  maxWidth: " 100%",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src={`${PUBLIC_IMG_PATH}/clean_img_1.webp`}
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0px",
                      border: "none",
                      padding: "0px",
                    }}
                  />
                </div>
                <img
                  alt="대형폐기물 그림"
                  src={`${PUBLIC_IMG_PATH}/clean_img_1.webp`}
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
            <p color="#ffffff" className="typography__P1-sc-1q4j4tg-8 dVfcpb">
              주민센터 방문 및 스티커 출력 없이도
            </p>
            <p color="#ffffff" className="typography__P1-sc-1q4j4tg-8 dVfcpb">
              대형폐기물을 모바일로 간편하게 수거 신청할 수 있어요.
            </p>
          </div>
          <div className="content-box">
            <div className="content-flex-wrap">
              <h2
                color="#ffffff"
                className="typography__H2-sc-1q4j4tg-1 bsJFyY"
              >
                내려드림
              </h2>
              <div
                style={{
                  display: "inline-block",
                  maxWidth: " 100%",
                  overflow: "hidden",
                  position: "relative",
                  boxSizing: "border-box",
                  margin: "0px",
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    display: "block",
                    maxWidth: "100%",
                  }}
                >
                  <img
                    alt=""
                    aria-hidden="true"
                    role="presentation"
                    src={`${PUBLIC_IMG_PATH}/clean_img_2.webp`}
                    style={{
                      maxWidth: "100%",
                      display: "block",
                      margin: "0px",
                      border: "none",
                      padding: "0px",
                    }}
                  />
                </div>
                <img
                  alt="대형폐기물 그림"
                  src={`${PUBLIC_IMG_PATH}/clean_img_2.webp`}
                  decoding="async"
                  style={{
                    position: "absolute",
                    inset: "0px",
                    boxSizing: "border-box",
                    padding: "0px",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0px",
                    height: "0px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                  }}
                />
              </div>
            </div>
            <p color="#ffffff" className="typography__P1-sc-1q4j4tg-8 dVfcpb">
              혼자 버리기 어려운 대형폐기물을
            </p>
            <p color="#ffffff" className="typography__P1-sc-1q4j4tg-8 dVfcpb">
              검증된 빼기 파트너를 통해 대신 버리실 수 있어요.
            </p>
          </div>
        </div>
        <div className="flex-row-box"></div>
      </div>
    </div>
  );
};

export default FirstSection;
