import TrendImage from '../../../assets/about-us-img-2.png'
import Berll from '../../../assets/BerllImage.png'
import Chart from './Components/Chart'

function Trend() {
  return (
    <div className="w-full py-10 px-6 min-h-[900px] sm:min-h-[500px] bg-white">
      <div className="w-full mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8 relative">

        <div className="h-full relative me-8">
          <img
            src={TrendImage}
            alt="trend"
            className="w-full sm:w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center items-center space-y-4">
          <div className="space-y-4 max-w-[547px] text-left mt-16"> 
            <h6 className="text-orange font-bold text-lg sm:text-xl">Trend</h6>
            <p className="text-dark_blue text-2xl sm:text-3xl font-bold">Our Popular Tour Plans</p>
            <p className="text-sm sm:text-base">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
              laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium.
            </p>

            <div className="flex justify-center items-center gap-4">
              <Chart gradient="bg-conic-gradient-1" percentage={78} />
              <Chart gradient="bg-conic-gradient-2" percentage={55} />
              <Chart gradient="bg-conic-gradient-3" percentage={33} />
            </div>
          </div>
        </div>

        <div className="flex justify-center sm:justify-end items-end sm:items-start lg:items-start">
          <img
            src={Berll}
            alt="Decorative element"
            className="w-[170px] h-[100px] sm:h-[170px] object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default Trend;
