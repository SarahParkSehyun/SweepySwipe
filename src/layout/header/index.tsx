import React, { useState, useEffect } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import PathContants from "@/routers/pathConstants";
import { PUBLIC_IMG_PATH } from "@/config";
import StyleButton from "@/components/Button";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by checking the presence of a token in localStorage/sessionStorage
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("storeid");
    setIsLoggedIn(false);
    navigate(PathContants.Home);
  };

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
            {isLoggedIn ? (
              <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                로그아웃
              </a>
            ) : (
              <Link to={PathContants.Login}>로그인</Link>
            )}
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
