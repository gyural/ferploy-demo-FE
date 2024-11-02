'use client'
import React, { useEffect } from 'react';
import { useAuthStore } from '@/app/hooks/useAuthStore';
import { getGoogleUserData } from '@/app/service/authService';

export default function Page(): JSX.Element {
  const clientId: string = process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID as string;
  const redirectUri: string = 'http://localhost:3000/login/dashboard';

  // Zustand에서 유저 상태와 상태 설정 함수 가져오기
  const setUser = useAuthStore((state) => state.setUser);
  const user = useAuthStore((state) => state.user);

  // Google OAuth 로그인 처리
  const handleGoogleLogin = () => {
    const googleAuthUrl = 'https://accounts.google.com/o/oauth2/auth';
    const scope = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope,
      access_type: 'offline',
      prompt: 'consent',
    });

    window.location.href = `${googleAuthUrl}?${params.toString()}`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
  
    if (code) {
      // 서버로 로그인 코드 전송 후 유저 정보 받아오기
      const data = getGoogleUserData(code);
  
      // URL에서 code 파라미터 제거
      const newUrlParams = new URLSearchParams(window.location.search);
      newUrlParams.delete('code');
      window.history.replaceState({}, document.title, window.location.pathname + '?' + newUrlParams.toString());
    }
  }, [setUser]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {user ? (
        <div>환영합니다, {user ? user.email : '이메일을 불러오는 중입니다.'}</div>
      ) : (
        <button
          onClick={handleGoogleLogin}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Google로 로그인
        </button>
      )}
    </div>
  );
}