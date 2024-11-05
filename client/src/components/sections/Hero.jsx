import { useEffect, useState } from 'react'
// import all Photos Used in this Hero
// import background of Hero
import HeroImage from '../../assets/hero1.png'
// import Tradmarks Photos
import FlyEmarats from '../../assets/TradMarks/image 909.png'
import Swiass from '../../assets/TradMarks/image 912 (1).png'
import triva from '../../assets/TradMarks/triva.jpg'
import air from '../../assets/TradMarks/air.jpg'
//import Ellipses
import Ellipse1 from '../../assets/Ellipses/Ellipse 31.png'
import Ellipse2 from '../../assets/Ellipses/Ellipse 32.png'
import Ellipse3 from '../../assets/Ellipses/Ellipse 33.png'
import Ellipse4 from '../../assets/Ellipses/Ellipse 34.png'
import Ellipse5 from '../../assets/Ellipses/Ellipse 35.png'
import Ellipse6 from '../../assets/Ellipses/Ellipse 36.png'
// import BuildPackageForm
import BuildPackageForm from '../forms/BulidPackageForm'

function Hero() {
  const [show, setShow] = useState(false)
  const [vis, setVis] = useState(true);

  const ShowFun = () => {
    setShow(!show)
  }

  useEffect(() => {
    const visFun = () => {
      setVis(window.innerHeight > 453);
    };
    visFun();
    window.addEventListener('resize', visFun);
    return () => window.removeEventListener('resize', visFun);
  }, []);

  return (
    <>
      <section className="flex flex-col relative w-full h-screen ">
        
        {/* Start Hero image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={HeroImage} alt="HeroImage" className="w-full h-full object-cover"/>
        </div>
        {/* End Hero image */}

        {/* Start Content Div */}
        <div className="flex flex-col absolute left-[40%] top-1/3 transform -translate-x-1/2 justify-center items-start text-left pl-4 sm:pl-6 md:pl-12 lg:pl-24 z-30 text-white ">
          {/* Start Sentences */}
          <div>
            <h1 className="font-poppins font-bold leading-tight text-2xl ml-3 xs:text-3xl sm:text-4xl md:text-4xl xl:text-[58.51px] xl:leading-[67.91px]">
              <p>No matter where</p>
              <p>you’re going to,we’ll</p>
              <p>take you there</p>
            </h1>
          </div>
          {/* Start Sentences */}

          {/* Start Booking Bar */}
          <div className="w-full max-w-4xl mx-auto flex flex-col sm:flex-row justify-around items-center bg-white/20 backdrop-blur-md rounded-lg py-4 px-4 mt-6">
            <input type="text" placeholder="Where to?" className="bg-transparent text-white placeholder-white px-4 py-2 lg:border-r md:border-r border-gray-300 focus:outline-none flex-grow md:w-[60px] sm:min-w-[200px] mb-2 sm:mb-0"/>
            <button onClick={ShowFun} className="bg-transparent text-white px-4 py-2 lg:border-r md:border-r border-gray-300 focus:outline-none mb-2 sm:mb-0">
              Travel Type
            </button>
            <button onClick={ShowFun} className="bg-transparent text-white px-4 py-2 focus:outline-none mb-2 sm:mb-0">
              Duration
            </button>
            <button className="bg-primary text-white py-2 px-6 rounded-lg font-semibold hover:bg-secondary transition-colors duration-300">
              Submit
            </button>
          </div>
          {/* End Booking Bar */}

          {/* Start Ellipses Div */}
          <div className={`${vis ? "md:flex" : 'hidden'} flex items-center mt-4 hidden `}>
            <img src={Ellipse1} alt="User 1" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <img src={Ellipse2} alt="User 2" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <img src={Ellipse3} alt="User 3" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <img src={Ellipse4} alt="User 4" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <img src={Ellipse5} alt="User 5" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <img src={Ellipse6} alt="User 6" className="w-10 h-10 rounded-full border-1 border-white -ml-2 md:w-8 md:h-8"/>
            <div className="w-10 h-10 md:w-8 md:h-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold text-sm -m-2">
              +
            </div>
            <span className="text-white ml-5 text-sm">
              2,500 people booked Tomorrowland Event in last 24 hours
            </span>
          </div>
          {/* End Ellipses Div */}
        </div>
        {/* End Content Div */}

        {/* Start Build Package Form */}
        {show && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <BuildPackageForm Close={ShowFun} />
            </div>
          </>
        )}
        {/* End Build Package Form */}
      </section>

      {/* Start Trademarks Section */}
      <div className="w-full h-[155px] bg-[#F7F7F7] flex justify-around items-center z-20 mt-auto rounded-md ">
        <img src={FlyEmarats} alt="FlyEmarats" className="h-2/5 object-contain w-1/5 md:w-1/5 lg:w-1/5"/>
        <img src={Swiass} alt="Swiass" className="h-1/5 object-contain w-1/5 md:w-1/5 lg:w-1/5"/>
        <img src={triva} alt="triva" className="h-2/5 object-contain w-1/5 md:w-1/5 lg:w-1/5"/>
        <img src={air} alt="air" className="h-1/5 object-contain w-1/5 md:w-1/5 lg:h-3/5 md:h-2/5 "/>
      </div>
      {/* End Trademarks Section */}
    </>
  )
}

export default Hero
