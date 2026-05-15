import HeroSection from '../components/HeroSection';
import Posts from '../components/Posts';
import FloatingActionButton from '../components/FloatingActionButton';
import { useAuth } from '../contexts/auth/useAuth';

export default function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <>
      <HeroSection user={user} />
      <Posts />
      <FloatingActionButton isAuthenticated={isAuthenticated} />
    </>
  );
}
