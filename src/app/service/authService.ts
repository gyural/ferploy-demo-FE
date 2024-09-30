import axios from 'axios';

// 구글 로그인 후 code로 access token과 user 정보를 가져오는 서비스
const baseURL:string = 'http://localhost:8080'
export const getGoogleUserData = async (code: string) => {
  try {
    const response = await axios.get(`${baseURL}/auth/login/oauth/google`, {
      params: {
        code,
      },
    });
    return response.data; // 유저 정보를 반환
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};