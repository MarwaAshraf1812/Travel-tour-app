import AboutHero from '../components/aboutSections/AboutHero/AboutHero'
import PackagesImage from '../assets/Packages.png'
import PackageLayout from '../components/aboutSections/packages/PackageLayout'
import Navbar from '../components/layout/Navbar'

export default function Packages() {
  return (
    <div className="relative">
      <Navbar />
      <AboutHero
        BigText={'Travel With Us'}
        smallText={'Search Tours'}
        image={PackagesImage}
      />
      <div>
        <PackageLayout />
      </div>
    </div>
  )
}
