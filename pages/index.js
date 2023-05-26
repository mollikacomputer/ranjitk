import { Inter } from "next/font/google";
import HeroSection from '@/components/HeroSection';
import Comments from '@/components/Comments';
import CountUpPage from '@/components/CountUpPage';
import Skillbar from "@/components/Skillbar";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Skillbar/>
      <Comments />
      <CountUpPage />
    </main>
  );
}
