import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <HeroSection/>
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}
