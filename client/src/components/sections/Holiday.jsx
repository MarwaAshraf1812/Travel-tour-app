import { useState, useEffect } from 'react';
import HolidayImage from '../../assets/Holiday/Holiday.png';
import Line from '../../assets/Holiday/Line-1.png';

function Holiday() {
  const [imgh, setImgh] = useState('350px'); 
  const HeightFun = () => {
    if (window.innerWidth <= 500) {
      setImgh('150px');
    } else {
      setImgh('350px');
    }
  };
  useEffect(() => {
    HeightFun();  
    window.addEventListener('resize', HeightFun);   
    return () => {
      window.removeEventListener('resize', HeightFun) 
    };
  }, []);
  return (
    <div className="w-full relative">
      <img className="w-full h-full object-cover" style={{ height: imgh }} src={HolidayImage} alt="HolidayImage"/>
      <div className="absolute left-1/3 top-[44%] max-[500px]:top-[32%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col max-[500px]:sm:space-y-1 lg:space-y-4 xl:space-y-4 md:space-y-2 sm:space-y-1">
        <p className="text-white font-Volkhov max-[320px]:text-[18px] max-[500px]:text-xl md:text-4xl xl:text-5xl lg:text-4xl font-bold">Let’s Make Your</p>
        <p className="text-white md:text-4xl max-[320px]:text-[18px] xl:text-5xl lg:text-4xl max-[500px]:text-xl font-bold">Next Holiday Amazing</p>
        <img src={Line} alt="Line" className="w-1/2 mt-2 absolute left-[57%] top-[90%]" />
      </div>
    </div>
  );
}

export default Holiday;
