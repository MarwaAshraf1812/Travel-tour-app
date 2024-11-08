import AboutHero from '../components/aboutSections/AboutHero/AboutHero'
import Promo from '../components/aboutSections/Promo/Promo';
import Trend from '../components/aboutSections/Trend/Trend';
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Testmonial from '../components/sections/Testmonial';

export default function About() {
  return (
    <>
      <Navbar />
      <div>
        <AboutHero />
        <Promo />
        <Trend />
        <Testmonial />
      </div>
      <Footer />
    </>
  )
}
