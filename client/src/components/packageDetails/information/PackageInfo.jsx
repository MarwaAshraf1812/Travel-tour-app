import InfoGallery from './InfoGallery'
import { useParams } from 'react-router-dom'
import PackageData from '../PackageData/PackageData.json'

export default function PackageInfo() {
  const { id } = useParams()
  const Countery = PackageData.find((e) => e.id === parseInt(id))
  const { name, Price, information, destination, departure, departure_time, return_time, dress_code, not_included, included } = Countery
  
  return (
    <div className="md:w-2/3 w-full p-4">
      <div className="flex flex-col gap-y-2 mb-8">
        <div className="flex flex-wrap items-center gap-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-xl md:text-2xl font-semibold text-orange">
            {Price} $ /<span className="text-gray-400 text-sm"> Per Couple</span>
          </p>
        </div>
        <div className="text-lg text-gray-500">
          <span className="text-yellow-500 text-lg">★★★★★</span> (2.3k reviews)
        </div>
      </div>
      <p className="text-gray-600 text-justify mb-8 md:mb-12 leading-relaxed">{information}</p>
      <div className="space-y-4 md:space-y-9 text-gray-700 mb-12 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[11rem]">
          <p className="font-bold text-xl text-orange">Destination:</p>
          <p>{destination}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[12rem]">
          <p className="font-bold text-xl text-orange">Departure:</p>
          <p>{departure}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[9rem]">
          <p className="font-bold text-xl text-orange">Departure Time:</p>
          <p>{departure_time}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[11rem]">
          <p className="font-bold text-xl text-orange">Return Time:</p>
          <p>{return_time}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[12rem]">
          <p className="font-bold text-xl text-orange">Dress Code:</p>
          <p>{dress_code}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[11rem]">
          <p className="font-bold text-xl text-orange">Not Included:</p>
          <p>{not_included}</p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-8 lg:gap-x-[11rem]">
          <p className="font-bold text-xl text-orange">Included:</p>
          <p>{included}</p>
        </div>
      </div>
      <InfoGallery />
    </div>
  )
}
