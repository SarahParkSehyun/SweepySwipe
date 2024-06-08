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
            <Link to={PathContants.Setting}>알림설정</Link>
          </div>
        </nav>
        <nav className="right-nav">
          <div className="nav-list">
            <Link to={PathContants.Login}>로그인</Link>
            <Link to={PathContants.SignUp}>회원가입</Link>
            <StyleButton className="style-button">
              <Link to={PathContants.GuideBook}>쓱쓱싹싹 가이드북</Link>
            </StyleButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
