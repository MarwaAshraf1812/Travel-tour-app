import RPhoto from '../../assets/Explore/RImg.png';
import LPhoto from '../../assets/Explore/LImg.png';
import { Button } from "../ui/button";

export default function Explore() {
  return (
    <div className="w-full lg:mt-20 xl:mt-20  md:mt-10 md:mb-6 lg:mb-20 xl:mb-20 flex flex-col md:flex-col lg:flex-row xl:flex-row md:w-full">
      {/* This is Right Part */}
      <div className="w-full lg:w-1/2 xl:w-1/2 h-64 md:h-full md:w-full relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img className="w-full h-full object-cover" src={LPhoto} alt="RPhoto" />
        {/* Start Content Div*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 space-y-2 px-4">
          <p className="text-xs md:text-md font-Volkhov">PROMOTION</p>
          <h1 className="text-xl md:text-2xl xl:text-4xl  lg:text-2xl font-Volkhov font-bold">Explore Nature</h1>
          <Button className="bg-transparent mt-2 text-xs md:text-base" variant="outline">View Packages</Button>
        </div>
        {/* End Content Div */}
      </div>
      {/* This is Left Part */}
      <div className="w-full lg:w-1/2 xl:w-1/2 h-64 md:h-full md:w-full relative">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img className="w-full h-full object-cover" src={RPhoto} alt="LPhoto" />
        {/*Start  Content  Div*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 space-y-2 px-4">
          <p className="text-xs md:text-md font-Volkhov">PROMOTION</p>
          <h1 className="text-xl md:text-2xl xl:text-4xl lg:text-2xl font-Volkhov font-bold">Explore Nature</h1>
          <Button className="bg-transparent mt-2 text-xs md:text-base" variant="outline">View Packages</Button>
        </div>
        {/* End Content Div */}
      </div>
    </div>
  )
}
