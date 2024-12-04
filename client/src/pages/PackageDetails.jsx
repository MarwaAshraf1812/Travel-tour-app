import AboutHero from '../components/aboutSections/AboutHero/AboutHero'
import PackageDetailImage from '../assets/PackageDetails/HeroImg.png'
import PackageInfo from '../components/packageDetails/information/PackageInfo'
import PackageNavbar from '../components/common/PackageNavbar'
import BookingForm from '../components/forms/BookingForm'
import Plane from '../assets/PackageDetails/plane.png'
import PackagePlan from '../components/packageDetails/PackagePlan'
import PackageLocation from '../components/packageDetails/PackageLocation'
import PackageGallary from '../components/packageDetails/PackageGallary'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { useState } from 'react'

function PackageDetails() {
  const [activeTab, setActiveTab] = useState('information')

  return (
    <div className="relative">
      <Navbar />
      <AboutHero
        BigText={'Landscapes'}
        smallText={'Explore'}
        image={PackageDetailImage}
      />
      <div className=" h-[80%] relative -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl md:max-w-7xl bg-white shadow-lg z-40">
        <PackageNavbar
          setActiveTab={setActiveTab}
          ActiveTab={activeTab}
        />
        <div className="flex flex-col  lg:flex-row lg:space-x-6 p-8 my-2  ">
          {activeTab === 'information' && <PackageInfo />}
          {activeTab === 'plan' && <PackagePlan />}
          {activeTab === 'location' && <PackageLocation />}
          {activeTab === 'gallery' && <PackageGallary />}

          <div className="w-full lg:w-[47%] flex flex-col items-center lg:items-end gap-y-8 md:gap-y-20 mt-8 md:mt-0">
            <BookingForm />
            <img
              src={Plane}
              alt="plane"
              className="w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PackageDetails
