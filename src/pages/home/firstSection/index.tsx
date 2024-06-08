import "./style.scss";
import StyleButton from "@/components/Button";
import { PUBLIC_IMG_PATH } from "@/config";

const FirstSection = () => {
  return (
    <section className="section-container">
      <p className="section-title">어떻게 버려야 할 지 고민은 그만</p>
      <h2 className="section-des">
        쓱쓱싹싹이 만드는 새롭게 버리는 공식들을 통해
      </h2>
      <h2 className="section-des">폐기물을 간편하게 버려보세요.</h2>
      <StyleButton className="detail-button">자세히보기</StyleButton>
      <div className="flex-style-box">
        <div className="flex-row-box">
          <BlueBox
            title="직접버림"
            icon={`${PUBLIC_IMG_PATH}/clean_img_1.webp`}
            des1="주민센터 방문 및 스티커 출력 없이도"
            des2="대형폐기물을 모바일로 간편하게 수거 신청할 수 있어요."
          />
          <BlueBox
            title="내려드림"
            icon={`${PUBLIC_IMG_PATH}/clean_img_2.webp`}
            des1="혼자 버리기 어려운 대형폐기물을"
            des2="검증된 쓱쓱싹싹 파트너를 통해 대신 버리실 수 있어요."
          />
        </div>
        <div className="flex-row-box">
          <GrayBox
            title="중고매입"
            icon={`${PUBLIC_IMG_PATH}/clean_img_3.webp`}
            des1="버리는 물품을 중고 물품으로"
            des2="쓱쓱싹싹 파트너에게 판매할 수도 있어요."
          />
          <GrayBox
            title="의류, 도서 기부"
            icon={`${PUBLIC_IMG_PATH}/clean_img_4.webp`}
            des1="의류, 도서 기부하고"
            des2="기부영수증을 받아보세요."
          />
          <GrayBox
            title="공사장 생활폐기물 배출"
            icon={`${PUBLIC_IMG_PATH}/clean_img_5.webp`}
            des1="쓱쓱싹싹 앱으로 공사장 생활폐기물 배출을"
            des2="One-Stop으로 간편하게 신고해보세요."
          />
        </div>
      </div>
    </section>
  );
};

const BlueBox = ({
  title,
  icon,
  des1,
  des2,
}: {
  title: string;
  icon: string;
  des1: string;
  des2: string;
}) => {
  return (
    <div className="content-box">
      <div className="content-flex-wrap">
        <h2 color="#ffffff">{title}</h2>
        <div className="content-wrap">
          <div className="img-box">
            <img alt="" aria-hidden="true" role="presentation" src={icon} />
          </div>
          <img alt="대형폐기물 그림" src={icon} decoding="async" />
        </div>
      </div>
      <p color="#ffffff">{des1}</p>
      <p color="#ffffff">{des2}</p>
    </div>
  );
};

const GrayBox = ({
  title,
  icon,
  des1,
  des2,
}: {
  title: string;
  icon: string;
  des1: string;
  des2: string;
}) => {
  return (
    <div className="small-content-box">
      <div className="content-flex-wrap">
        <div className="title-wrap">
          <h5>{title}</h5>
        </div>
        <p>{des1}</p>
        <p>{des2}</p>
        <div className="content-wrap">
          <div className="img-box">
            <div>
              <img alt="" aria-hidden="true" role="presentation" src={icon} />
            </div>
            <img alt="공사장생활폐기물 신고 그림" src={icon} decoding="async" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
