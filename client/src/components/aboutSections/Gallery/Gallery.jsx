import img1 from '../../../assets/Gellary/img1.png'
import img2 from '../../../assets/Gellary/img2.png'
import img3 from '../../../assets/Gellary/img3.png'
import img4 from '../../../assets/Gellary/img4.png'
import img5 from '../../../assets/Gellary/img5.png'
import img6 from '../../../assets/Gellary/img6.png'
import img7 from '../../../assets/Gellary/img7.png'
import img8 from '../../../assets/Gellary/img8.png'
import img10 from '../../../assets/Gellary/img10.png'
import img11 from '../../../assets/Gellary/img11.png'
import GalleryCard from './GalleryCard'

function Gallery() {
  const Cards = [
    { img: img7, name: 'Barcelona', price: '$840' },
    { img: img6, name: 'Switzerland', price: '$840' },
    { img: img4, name: 'Rio de Jenero', price: '$840' },
    { img: img1, name: 'Barcelona', price: '$840' },
    { img: img5, name: 'Tommorow land', price: '$840' },
    { img: img11, name: 'Los Angelas', price: '$840' },
    { img: img2, name: 'India', price: '$840' },
    { img: img3, name: 'Barcelona', price: '$840' },
    { img: img4, name: 'Barcelona', price: '$840' },
    { img: img8, name: 'Barcelona', price: '$840' },
    { img: img10, name: 'Maldives', price: '$840' },
  ]

  return (
    <div className="container mx-auto w-[80%] my-24 px-4">
      <div className="text-center">
        <button className="text-orange uppercase tracking-widest font-bold mb-2">
          Explore More
        </button>
        <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold ">Our International Packages</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {Cards.map((card, i) => (
          <GalleryCard
            key={i}
            img={card.img}
            name={card.name}
            price={card.price}
            isLarge={i === 2}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
