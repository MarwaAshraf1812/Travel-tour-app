import BgImage from '../../../assets/BgImage.png'
import AboutImage from '../../../assets/AboutImage.png'
import { Button } from '../../ui/button'

function Promo() {
  return (
    <div className="py-20 px-6 min-h-[700px] sm:min-h-[500px]">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row relative py-9 h-full">
        
        <div className="flex flex-col z-30 w-full sm:w-1/2 sm:me-8 h-full">
          <h6 className="text-orange font-bold text-lg sm:text-xl">Promotion</h6>
          <p className="text-dark_blue text-2xl sm:text-3xl font-bold mt-4 sm:mt-0">
            We Provide You Best
            <br /> Europe Sightseeing Tours
          </p>
          <p className="mt-4 text-sm sm:text-base">
            Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a
            laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta
            recusandae in maxime quasi aut ducimus illum aut optio quibusdam!
          </p>
          <div className="mt-4">
            <Button className="bg-orange hover:text-orange hover:bg-white border hover:border-orange">View Packages</Button>
          </div>
        </div>

        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
          
          <div className="absolute inset-0 w-full h-[240px] sm:h-[360px] z-10">
            <img
              src={BgImage}
              alt="Promotion background"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="absolute top-2 sm:top-4 z-20 w-[200px] h-[200px] sm:w-[340px] sm:h-[340px]">
            <img
              src={AboutImage}
              alt="About background"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Promo
