import AboutHero from '../components/aboutSections/AboutHero/AboutHero'
import Promo from '../components/aboutSections/Promo/Promo';
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
        <Testmonial />
      </div>
      <Footer />
    </>
  )
}
