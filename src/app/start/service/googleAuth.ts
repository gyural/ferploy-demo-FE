const clientId: string = process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID as string;
// const redirectUri: string = 'http://localhost:3000';
const redirectUri: string = 'https://ferploy-demo-fe.vercel.app';
  // Google OAuth 로그인 처리
export const handleGoogleLogin = () => {
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