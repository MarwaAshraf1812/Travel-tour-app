import AboutHero from '../components/aboutSections/AboutHero/AboutHero';
import Promo from '../components/aboutSections/Promo/Promo';
import Trend from '../components/aboutSections/Trend/Trend';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';
import Testmonial from '../components/sections/Testmonial';
import Banner from '../components/aboutSections/Banner/Banner';
import Gallery from '../components/aboutSections/Gallery/Gallery';
import AboutHeroImage from '../assets/AboutHeroImage.png';
export default function About() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div>
        <AboutHero BigText={'About Us'} smallText={'READ'} image={AboutHeroImage} />
        <Promo />
        <Banner />
        <Trend />
        <Gallery />
        <Testmonial />
      </div>
      <Footer />
    </div>
  );
}
