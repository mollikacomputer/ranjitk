import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Comments from '@/components/Comments';
import '@/styles/globals.css'
import Status from '@/components/Status';

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <HeroSection/>
    <Comments/>
    <Status/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
