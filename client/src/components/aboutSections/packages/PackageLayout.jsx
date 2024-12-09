import { useState } from 'react'
import PackageNavbar from '../../common/PackageNavbar'
import PackageCard from './PackageCard'
import TripForm from '../../forms/TripForm'
import Plane from '../../../assets/PackageDetails/plane.png'

const dummyPackages = [
  {
    image: 'https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?semt=ais_hybrid',
    date: '12, September 2022',
    people: '120+',
    title: 'Beach Paradise',
    description: 'Experience the serene beauty of the seaside.',
    price: '$1,100',
    rating: '4.5',
  },
  {
    image: 'https://img.freepik.com/free-photo/beautiful-shot-pathway-towards-village-mountain_181624-46367.jpg?semt=ais_hybrid',
    date: '15, October 2022',
    people: '80+',
    title: 'Mountain Retreat',
    description: 'Find peace and adventure in the mountains.',
    price: '$950',
    rating: '4.8',
  },
  {
    image: 'https://img.freepik.com/free-photo/girl-night-with-phone_1157-16842.jpg?semt=ais_hybrid',
    date: '01, December 2022',
    people: '50+',
    title: 'City Lights Tour',
    description: 'Explore the bustling life of the big city.',
    price: '$750',
    rating: '4.3',
  },
  {
    image: 'https://img.freepik.com/free-photo/beautiful-shot-people-walking-with-their-camels-desert-erg-lihoudi-morocco_181624-7871.jpg?semt=ais_hybrid',
    date: '22, November 2022',
    people: '30+',
    title: 'Desert Safari',
    description: 'Discover the thrill of desert adventures.',
    price: '$1,250',
    rating: '4.9',
  },
  {
    image: 'https://img.freepik.com/free-photo/hiker-walking-through-dark-forest_23-2147683138.jpg?semt=ais_hybrid',
    date: '03, January 2023',
    people: '100+',
    title: 'Jungle Expedition',
    description: 'Dive into the wild with this exciting journey.',
    price: '$1,050',
    rating: '4.7',
  },
  {
    image: 'https://img.freepik.com/free-photo/attractive-asian-female-traveller-tourism-hand-use-camera-sightseeing-old-stone-stair-hallway-cartagena-spain-with-happiness-cheerful-travel-journey-concept_609648-778.jpg?semt=ais_hybrid',
    date: '18, March 2023',
    people: '60+',
    title: 'Historical Sites Tour',
    description: 'Immerse yourself in rich historical landmarks.',
    price: '$800',
    rating: '4.6',
  },
]

function PackageLayout() {
  const [activeTab, setActiveTab] = useState('date')

  const tabsConfig = [
    { key: 'date', label: 'Date', icon: null },
    { key: 'priceLow', label: 'Price Low to High', icon: null },
    { key: 'priceHigh', label: 'Price High to Low', icon: null },
    { key: 'name', label: 'Name', icon: null },
  ]

  return (
    <div className="h-full relative -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white shadow-lg z-40">
      <PackageNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        tabsConfig={tabsConfig}
      />

      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="col-span-12 sm:col-span-7 grid gap-6 sm:grid-cols-2">
          {dummyPackages.map((pkg, index) => (
            <PackageCard
              key={index}
              image={pkg.image}
              date={pkg.date}
              people={pkg.people}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              rating={pkg.rating}
            />
          ))}
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-5 flex flex-col gap-6">
          <div>
            <TripForm data={dummyPackages} />
          </div>

          <div className="flex justify-center items-center mt-44">
            <img
              src={Plane}
              alt="plane"
              className="w-full max-w-lg object-cove"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageLayout
