import React from "react";

const SocialKakao = () => {
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/member/login", {
        method: "GET",
        headers: {
          'Accept': 'text/html',  // HTML 응답을 받기 위해 설정
        },
      });

      if (response.ok) {
        const htmlText = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');
        const loginLink = doc.querySelector('a').href;
        
        if (loginLink) {
          window.location.href = loginLink;
        } else {
          console.error("Login URL not found");
        }
      } else {
        console.error("Failed to get login page");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <button onClick={handleLogin}>
        카카오 로그인
      </button>
    </>
  );
};

export default SocialKakao;
