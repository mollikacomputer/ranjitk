import { Inter } from "next/font/google";
import HeroSection from '@/components/HeroSection';
import Comments from '@/components/Comments';
import CountUpPage from '@/components/CountUpPage';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Comments />
      <CountUpPage />
    </main>
  );
}
