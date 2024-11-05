import PhotoCard1 from '../../assets/Promotion/card1.png';
import PhotoCard2 from '../../assets/Promotion/card2.png';
import PhotoCard3 from '../../assets/Promotion/card3.png';
import PhotoCard4 from '../../assets/Promotion/card4.png';
import Ivel from '../../assets/Promotion/Ivel.png';
import PromotionCard from '../common/cards/PromotionCard';
import { Button } from "../ui/button";

function Promotion() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 lg:p-16 relative w-full max-w-[90%] mx-auto mt-16 xl:mb-48 sm:mt-32 sm:mb-32  md:mb-0 h-auto lg:h-[600px]">
      <div className="lg:w-1/2 space-y-3 lg:absolute top-[10%] px-4 lg:px-0 text-center lg:text-left">
        <p className="text-orange lg:text-md font-Volkhov text-lg sm:text-xl">PROMOTION</p>
        <h2 className="text-2xl sm:text-3xl xl:text-4xl lg:text-3xl font-bold text-gray-800">We Provide You Best</h2>
        <h2 className="text-2xl sm:text-3xl xl:text-3xl lg:text-2xl font-bold text-gray-800">Europe Sightseeing Tours</h2>
        <p className="text-gray-600 text-sm sm:text-base">
          Et labore harum non nobis ipsum eum molestias molestiae at corporis praesentium a laudantium
          internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi
          aut ducimus illum aut optio quibusdam!
        </p>
        <Button className="bg-orange text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-red-600 transition"> View Packages </Button>
      </div>
      <div className="flex justify-center items-center xl:w-[63%] xl:top-[10%] lg:w-[55%] lg:absolute md:w-[114%] top-[25%]  right-[-78px] mt-8 lg:mt-0">
        <div className="relative w-full max-w-[100%] sm:max-w-[60%] lg:w-full flex justify-center lg:justify-end">
          <img src={Ivel} alt="Eiffel Tower" className="xl:w-[80%] md:w-[100%] sm:w-[80%] -right-[78px] lg:w-[100%] h-auto rounded-t-full" />
          <p className="absolute top-1/2 -right-[78px] transform -rotate-90 text-gray-300 text-lg sm:text-2xl font-bold whitespace-nowrap">Breathtaking Views</p>
        </div>
      </div>
      <div className=" relative xl:top-[12rem] xl:-left-[165px] lg:top-[10rem] lg:-left-[56px] flex gap-4 mt-8 lg:mt-16 w-[70%] md:w-[109%]  max-[500px]:w-[100%] justify-center flex-wrap">
        <PromotionCard image={PhotoCard1} price="700" />
        <PromotionCard image={PhotoCard2} price="800" />
        <PromotionCard image={PhotoCard3} price="500" />
        <PromotionCard image={PhotoCard4} price="400" />
      </div>
    </div>
  );
}

export default Promotion;
