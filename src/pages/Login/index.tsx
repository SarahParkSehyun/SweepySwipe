import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.scss";
import PathContants from "@/routers/pathConstants";
import SocialKakao from '../SocialKakao';

const Login = () => {
  const [loginCheck, setLoginCheck] = useState(false); // 로그인 상태 체크

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    // 로그인 처리 로직을 구현합니다.
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    
    const response = await fetch(
      "로그인 서버 주소",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      }
    );
    const result = await response.json();

    if (response.status === 200) {
      setLoginCheck(false);
      // Store token in local storage
      sessionStorage.setItem("token", result.token);
      sessionStorage.setItem("email", result.email); // 여기서 userid를 저장합니다.
      sessionStorage.setItem("role", result.role); // 여기서 role를 저장합니다.
      sessionStorage.setItem("storeid", result.storeId); // 여기서 role를 저장합니다.
      console.log("로그인성공, 이메일주소:" + result.email);
      navigate("/"); // 로그인 성공시 홈으로 이동합니다.
    } else {
      setLoginCheck(true);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
         {loginCheck && (
        <label style={{color: "red"}}>로그인에 실패했습니다.</label>
        )}
        <div className="social-login">
          <SocialKakao />
        </div>

        <p className="signup-link">
          아직 회원이 아니신가요? <Link to={PathContants.SignUp}>회원가입</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
