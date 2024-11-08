import AboutHeroImage from '../../../assets/AboutHeroImage.png'

function AboutHero() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute inset-0 w-full h-full">
        <img
          src={AboutHeroImage}
          alt="About hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h6 className='text-white text-2xl sm:text-2xl font-bold'>Read</h6>
          <h1 className="text-white text-3xl sm:text-8xl font-bold">about us</h1>
        </div>
      </div>
    </div>
  )
}

export default AboutHero
