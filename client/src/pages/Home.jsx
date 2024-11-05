import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from '../components/sections/Hero';
import Holiday from "../components/sections/Holiday";
import Explore from "../components/sections/Explore";
import Promotion from '../components/sections/Promotion'
import Testmonial from '../components/sections/Testmonial';
export default function Home() {
  return (
    <>
    <Navbar />
    <div>
        <Hero />
    </div>
        <Holiday />
        <Promotion/>
        <Explore />
        <Testmonial/>
        <Footer />
    </>
    
  )
}

