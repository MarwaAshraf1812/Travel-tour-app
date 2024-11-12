// import AboutHeroImage from '../../../assets/AboutHeroImage.png'
import WebFont from 'webfontloader';
import { useEffect } from 'react';

function AboutHero(Props) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Yesteryear', 'cursive'],
      },
    });
  }, []);
  return (
    <div className="relative w-screen h-screen ">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Props.image}
          alt="About hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h6 className='text-white text-2xl sm:text-2xl font-bold'>{Props.smallText}</h6>
          <h1 className="text-white text-[5.5rem] sm:text-8xl md:text-[10rem] lg:text-[14rem] mt-4 font-bold" style={{ fontFamily: 'Yesteryear' }}>{Props.BigText}</h1>
        </div>
      </div>
    </div>
    
    
  )
}

export default AboutHero
