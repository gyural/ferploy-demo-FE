import { useAuthStore } from '../hooks/useAuthStore';

export default function Home() {
  const { setUser } = useAuthStore();

  

  return (
    <div>
      <button>Login with Google</button>
    </div>
  );
}