import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const query = new URLSearchParams(window.location.search);
      const code = query.get('code');

      if (code) {
        try {
          const response = await fetch('http://localhost:8080/member/callback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ code }),
          });

          if (response.ok) {
            const result = await response.json();
            sessionStorage.setItem('token', result.token);
            sessionStorage.setItem('email', result.email);
            sessionStorage.setItem('role', result.role);
            sessionStorage.setItem('storeid', result.storeId);
            navigate('/'); // 홈으로 이동
          } else {
            console.error('Callback failed');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    handleAuth();
  }, [navigate]);

  return <div>로그인 중...</div>;
};

export default AuthCallback;
