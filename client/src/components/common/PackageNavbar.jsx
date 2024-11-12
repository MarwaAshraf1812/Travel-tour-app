import infoIcon from '../../assets/PackageDetails/bi_info-circle.png'
import locIcon from '../../assets/PackageDetails/akar-icons_location.png'
import GalleryIcon from '../../assets/PackageDetails/clarity_image-gallery-line.png'
import planIcon from '../../assets/PackageDetails/Vector.png'
import WebFont from 'webfontloader'
import { useState, useEffect } from 'react'

export default function PackageNavbar(Props) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Yesteryear', 'cursive'],
      },
    })
  }, [])
  const [isOpen, setIsOpen] = useState(false)
  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <header className="bg-[#F8F8F8] border-gray-200 max-[766px]:text-center">
      <div className="flex justify-between items-center max-w-7xl h-28 px-4 lg:px-0 mx-auto">
        <button
          className="lg:hidden text-gray-700 focus:outline-none flex justify-center items-center w-full"
          onClick={toggleDropdown}
        >
          <span
            className="text-5xl text-orange"
            style={{ fontFamily: 'Yesteryear' }}
          >
            Menu
          </span>
        </button>
        <div className="hidden lg:flex justify-around w-full  h-full">
          <button
            onClick={() => Props.setActiveTab('information')}
            className={`flex items-center justify-center h-[100%] w-[25%] font-semibold transition-colors duration-300 ${
              Props.ActiveTab === 'information' ? 'bg-white text-gray-900' : 'text-gray-700'
            }`}
          >
            <img
              src={infoIcon}
              alt="Info Icon"
              className="mr-4 w-6 h-6"
            />
            Information
          </button>

          <button
            onClick={() => Props.setActiveTab('plan')}
            className={`flex items-center justify-center h-[100%] w-[25%] font-semibold transition-colors duration-300 ${
              Props.ActiveTab === 'plan' ? 'bg-white text-gray-900' : 'text-gray-700'
            }`}
          >
            <img
              src={planIcon}
              alt="Plan Icon"
              className="mr-4 w-6 h-6"
            />
            Plan
          </button>

          <button
            onClick={() => Props.setActiveTab('location')}
            className={`flex items-center justify-center h-full w-[25%] font-semibold transition-colors duration-300 ${
              Props.ActiveTab === 'location' ? 'bg-white text-gray-900' : 'text-gray-700'
            }`}
          >
            <img
              src={locIcon}
              alt="Location Icon"
              className="mr-4 w-6 h-6"
            />
            Location
          </button>

          <button
            onClick={() => Props.setActiveTab('gallery')}
            className={`flex items-center justify-center h-full w-[25%] font-semibold transition-colors duration-300 ${
              Props.ActiveTab === 'gallery' ? 'bg-white text-gray-900' : 'text-gray-700'
            }`}
          >
            <img
              src={GalleryIcon}
              alt="Gallery Icon"
              className="mr-4 w-6 h-6"
            />
            Gallery
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-4 bg-[#EDEDED] p-4 mx-4">
          <button
            className={`${
              Props.ActiveTab === 'information' ? 'bg-orange text-white rounded-lg' : 'text-orange'
            } hover:bg-orange hover:rounded-lg hover:text-white`}
            onClick={() => {
              Props.setActiveTab('information')
              setIsOpen(false)
            }}
          >
            Information
          </button>

          <button
            className={`${
              Props.ActiveTab === 'plan' ? 'bg-orange text-white rounded-lg' : 'text-orange'
            } hover:bg-orange hover:rounded-lg hover:text-white`}
            onClick={() => {
              Props.setActiveTab('plan')
              setIsOpen(false)
            }}
          >
            Plan
          </button>

          <button
            className={`${
              Props.ActiveTab === 'location' ? 'bg-orange text-white rounded-lg' : 'text-orange'
            } hover:bg-orange hover:rounded-lg hover:text-white`}
            onClick={() => {
              Props.setActiveTab('location')
              setIsOpen(false)
            }}
          >
            Location
          </button>

          <button
            className={`${
              Props.ActiveTab === 'gallery' ? 'bg-orange text-white rounded-lg' : 'text-orange'
            } hover:bg-orange hover:rounded-lg hover:text-white`}
            onClick={() => {
              Props.setActiveTab('gallery')
              setIsOpen(false)
            }}
          >
            Gallery
          </button>
        </div>
      )}
    </header>
  )
}
