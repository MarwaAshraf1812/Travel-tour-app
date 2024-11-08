import TrendImage from '../../../assets/about-us-img-2.png'
import Berll from '../../../assets/BerllImage.png'

function Trend() {
  return (
    <div className="w-full py-10 px-6 min-h-[900px] sm:min-h-[500px] bg-white">
      <div className="w-full mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
        
        {/* First Column: Image */}
        <div className="h-full relative">
          <img src={TrendImage} alt="trend" className="w-full sm:w-full h-full object-contain" />
        </div>

        {/* Second Column: Text - Centered Vertically */}
        <div className="ms-3 sm:ms-0 flex flex-col justify-center">
          <div className="space-y-4 max-w-[547px]">
            <h6 className="text-orange font-bold text-lg sm:text-xl">Trend</h6>
            <p className="text-dark_blue text-2xl sm:text-3xl font-bold">
              Our Popular Tour Plans
            </p>
            <p className="text-sm sm:text-base">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
            </p>
          </div>
        </div>

        {/* Third Column: Decorative Image */}
        <div className="flex justify-center sm:justify-end items-end sm:items-start lg:items-start">
          <img src={Berll} alt="Decorative element" className="w-[170px] h-[100px] sm:h-[170px] object-contain" />
        </div>
        
      </div>
    </div>
  )
}

export default Trend
