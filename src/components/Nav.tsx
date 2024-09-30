'use client';
import { useAuthStore, User } from '@/app/hooks/useAuthStore';
import { useEffect } from 'react';

const Nav = () => {
  const { setUser, user, clearUser } = useAuthStore();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      // JSON.parse를 사용하여 문자열을 User 객체로 변환
      const parsedUser: User = JSON.parse(storedUser);
      setUser(parsedUser); // setUser에 객체를 전달
    }
  }, [setUser]);

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <h1>My App</h1>
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <button onClick={clearUser}>Logout</button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

export default Nav;