import AboutHeroImage from '../../../assets/AboutHeroImage.png'
function AboutHero() {
  return (
    <div className="relative w-screen h-screen">
      <div className="absolute right-0 top-0 w-full h-full">
        <img
          src={AboutHeroImage}
          alt="About hero"
          className="object-cover w-full h-full"
        />
      </div>
      
    </div>
  )
}

export default AboutHero
