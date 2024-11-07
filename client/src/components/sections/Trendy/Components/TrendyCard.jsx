import { MapPinIcon } from '@heroicons/react/24/solid'
import { Button } from '../../../ui/button'
import stars from '../../../../assets/Trendy/stars.png'

function TrendyCard({ image,flag,days,people,title,location,price,oldPrice,description}) {
  return (
    <div className="relative w-80 bg-transparent rounded-lg  overflow-hidden md:w-[48%] lg:w-80">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 shadow-lg object-cover"/>
      </div>
      <img src={flag} alt="flag" className="absolute top-[10rem] left-0 w-20 h-20 object-cover rounded-full "/>
      <div className="p-4 mt-6">
        <div className="flex items-center text-gray-500 text-sm">
            <span className="mr-2">📅 {days}</span>
          <span>👥 {people}</span>
        </div>
        <div className="text-left mt-4 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <img src={stars} alt="stars" className="ml-2" />
          </div>
          <div className="flex items-center justify-start">
            <MapPinIcon className="w-5 h-5 text-gray-500 mr-1" />
            <p className="text-gray-500">{location}</p>
          </div>
        </div>
        <div className="flex items-center text-orange font-bold">
          <span className="text-lg">{price} $</span>
          <span className="text-gray-400 text-sm line-through ml-2">{oldPrice} $</span>
        </div>
        <p className="text-gray-700 text-sm my-2">{description}</p>
        <div className="w-full flex justify-start">
          <Button className="mt-4 py-2 px-4 bg-orange text-white font-semibold rounded-lg hover:bg-white  hover:text-orange border  hover:border-orange  transition "variant="outline">Explore Now</Button>
        </div>
      </div>
    </div>
  )
}

export default TrendyCard