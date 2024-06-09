import React from "react";
import "./style.scss";
import SocialKakao from '../SocialKakao';
import PathContants from "@/routers/pathConstants";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="social-login">
          <SocialKakao />
        </div>
      </div>
    </div>
  );
};

export default Login;
