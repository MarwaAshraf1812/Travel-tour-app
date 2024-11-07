import FastList from './components/FastList'
import FastIcon1 from '../../../assets/fastIcon1.svg'
import FastIcon2 from '../../../assets/FastIcon2.svg'
import FastIcon3 from '../../../assets/FastIcon3.svg'
import FastRectangle from '../../../assets/FastRectangle.png'
import { FaMap, FaBuilding, FaEnvelope, FaLeaf } from 'react-icons/fa'

export default function Fast() {
  const fastLists = [
    {
      icon: FastIcon1,
      bgColor: 'bg-custom_yellow',
      title: 'Choose Destination',
      description: 'Experience quick and easy travel options.',
    },
    {
      icon: FastIcon2,
      bgColor: 'bg-custom_orange',
      title: 'Check Availability',
      description: 'Experience quick and easy travel options.',
    },
    {
      icon: FastIcon3,
      bgColor: 'bg-custom_blue',
      title: 'Let’s Go',
      description: 'Experience quick and easy travel options.',
    },
  ]

  return (
    <div className="h-full py-10 px-4 sm:px-8 lg:px-28 bg-white">
      <div className="w-full mx-auto max-w-full h-full px-28">
        <div className="flex flex-col lg:flex-row gap-8 h-full">
          <div className="flex-1 flex flex-col justify-center w-full">
            <h4 className="text-2xl font-bold text-orange text-left mb-2">Fast & Easy</h4>
            <p className="text-4xl text-dark_blue font-bold text-left mb-6">
              Get Your Favourite <br/>Resort Bookings
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {fastLists.map((list, index) => (
                <FastList
                  key={index}
                  icon={list.icon}
                  bgColor={list.bgColor}
                  title={list.title}
                  description={list.description}
                />
              ))}
            </div>
          </div>

          <div className="flex-1 relative w-full py-24 transform hover:scale-105">
            <div className="relative z-10 flex flex-col items-center justify-start h-full mt-12 lg:mt-0">
              <div className="p-8 bg-white rounded-xl shadow-xl max-w-sm mx-auto">
                <img
                  src={FastRectangle}
                  alt="Fast Rectangle"
                  className="rounded-2xl w-full"
                />
                <div className="flex flex-col gap-3 mt-4  py-12 cursor-pointer ">
                  <h3 className="text-xl font-semibold">Trip to Hawaii</h3>
                  <p className="text-sm text-gray-500">14-29 June | by JR Martinax</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="p-2 bg-gray-300 rounded-full">
                      <FaMap className="text-lg text-gray-500 hover:text-yellow-600" />
                    </div>
                    <div className="p-2 bg-gray-300 rounded-full">
                      <FaLeaf className="text-lg text-gray-500 hover:text-green-600" />
                    </div>
                    <div className="p-2 bg-gray-300 rounded-full">
                      <FaEnvelope className="text-lg text-gray-500 hover:text-blue-600" />
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-8">
                    <FaBuilding className="text-lg text-gray-500 hover:text-red-600" />
                    <button className="text-sm text-blue-500">60 people are interested</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
