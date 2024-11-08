import AboutHero from '../components/aboutSections/AboutHero/AboutHero'
import Promo from '../components/aboutSections/Promo/Promo';
import Trend from '../components/aboutSections/Trend/Trend';
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import Testmonial from '../components/sections/Testmonial';
import Banner from '../components/aboutSections/Banner/Banner';
import Gallery from '../components/aboutSections/Gallery/Gallery';
function About() {
  return (
    <>
      <Navbar />
      <div>
        <AboutHero />
        <Promo />
        <Banner/>
        <Trend />
        <Gallery/>
        <Testmonial />
      </div>
      <Footer />
    </>
  )
}

export default About

