import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import PathContants from "@/routers/pathConstants";
import { PUBLIC_IMG_PATH } from "@/config";
import StyleButton from "@/components/Button";
const Header = () => {
  return (
    <header className="header-container">
      <div className="flex-box">
        <nav className="left-nav">
          <Link className="logo" to={PathContants.Home}>
            <div>
              <img src={`${PUBLIC_IMG_PATH}/temp_logo.svg`} />
            </div>
          </Link>
          <div className="nav-list">
            <Link to={PathContants.Home}>서비스 안내</Link>
            <Link to={PathContants.Home}>빼기 파트너</Link>
            <Link to={PathContants.Home}>알림설정</Link>
          </div>
        </nav>
        <nav className="right-nav">
          <div className="nav-list">
            <Link to={PathContants.Login}>로그인</Link>
            <Link to={PathContants.SignUp}>회원가입</Link>
            <StyleButton className="style-button">
              대형 폐기물 수거신청
            </StyleButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
