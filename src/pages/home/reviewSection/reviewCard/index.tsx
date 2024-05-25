import React from "react";
import "./style.scss";
const ReviewCard = () => {
  return (
    <div className="review-card-wrap">
      <div className="review-content-wrap">
        <p className="caption">Reivew</p>
        <p color="black" className="sub-title">
          현금도 필요 없고, 스티커를 사러 갈 일도 없네요
        </p>
        <p color="black" className="content">
          스티커 사러 갈 일이 없어요. 현금 가지고 나갈 필요 없고, 동사무소나
          편의점에서 스티커 사지 않아도 되요. 편의점에서도 스티커를 다 파는게
          아니라 지정된 곳이 따로 있다던데, 그냥 어플깔고 간단히 처리하니 좋네요
        </p>
      </div>
      <p color="black" className="user-name">
        - 손** 고객님
      </p>
    </div>
  );
};

export default ReviewCard;
