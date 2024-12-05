import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from '../components/sections/Hero';
import Holiday from "../components/sections/Holiday";
import Explore from "../components/sections/Explore";
import Promotion from '../components/sections/Promotion'
import Testmonial from '../components/sections/Testmonial';
import Category from "../components/sections/Category/Category";
import Fast from "../components/sections/Fast/Fast";
import Trendy from '../components/sections/Trendy/Trendy';
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
    <Navbar />
    <div >
        <Hero />
    </div>
        <Category />
        <Fast />
        <Holiday />
        <Promotion/>
        <Explore />
        <Trendy/>
        <Testmonial/>
        <Footer/>
    </div>
    
  )
}

