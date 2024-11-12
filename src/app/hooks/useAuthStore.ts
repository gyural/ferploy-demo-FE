import { create } from 'zustand';

// User 인터페이스 정의
export interface User {
  id: string;
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  user: User | null; // user의 타입을 User 객체 또는 null로 설정
  setUser: (user: User | null) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));