import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Comments from '@/components/Comments';
import '@/styles/globals.css';
import CountUpPage from '@/components/CountUpPage';


export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
