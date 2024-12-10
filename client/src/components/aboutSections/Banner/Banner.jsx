import WebFont from 'webfontloader';
import vec from '../../../assets/Bannar/Vector.png';
import BannarImage from '../../../assets/Bannar/BannarImage.png';
import { useState, useEffect } from 'react';

export default function Banner() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Yesteryear', 'cursive'],
      },
    });
  }, []);
  
  const [imgh, setImgh] = useState('350px'); 
  const HeightFun = () => {
    if (window.innerWidth <= 500) {
      setImgh('150px');
    }
    else if(window.innerWidth >=1024) {
      setImgh('450px');
    }else setImgh('350px');
  };
  useEffect(() => {
    HeightFun();  
    window.addEventListener('resize', HeightFun);   
    return () => {
      window.removeEventListener('resize', HeightFun) 
    };
  }, []);

  return (
    <div className="w-full relative flex items-center justify-center" >
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <img src={BannarImage} alt="Bannar Image" className="w-full h-full object-cover" style={{ height: imgh }} />
      <div
        className="absolute z-20 xl:text-[9.125rem] lg:text-[7.5rem] md:text-[5rem] text-[3rem] text-white font-yesteryear text-center"
        style={{ fontFamily: 'Yesteryear' }}
      >
        Wanderlust
      </div>
      <div className="absolute z-20 flex items-center justify-center">
        <img src={vec} alt="Vector" className="w-1/4 md:w-[55%] lg:w-[66%] max-h-full" />
      </div>
    </div>
  );
}

