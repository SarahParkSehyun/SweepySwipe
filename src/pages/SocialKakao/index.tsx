const SocialKakao = () => {
  const Rest_api_key = 'bbf944c9e84c07e8f2cf4fe272cbf5de'; // REST API KEY
  const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
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