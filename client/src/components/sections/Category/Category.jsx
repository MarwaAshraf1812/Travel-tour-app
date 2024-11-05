import CategoryCard from './components/CategoryCard'
import TourImage from '../../../assets/tour-guide 1.png'
import travelImage from '../../../assets/travelling 1.png'
import HandsImage from '../../../assets/hands 1.png'
import MedicalImage from '../../../assets/medical-team 1.png'

export default function Category() {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h4 className="text-2xl font-bold text-orange text-center mb-2">Category</h4>
        <h1 className="text-3xl font-bold text-dark_blue text-center">We Offer Best Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
          <CategoryCard
            image={TourImage}
            category="Guided Tours"
            text="Experience guided tours with expert insights into local culture and history."
          />
          <CategoryCard
            image={travelImage}
            category="Best Flights Options"
            text="Get access to the best flight deals for your travels."
          />
          <CategoryCard
            image={HandsImage}
            category="Religious Tours"
            text="Join our religious tours to connect with your spirituality."
          />
          <CategoryCard
            image={MedicalImage}
            category="Medical Insurance"
            text="Stay protected with our comprehensive medical insurance plans."
          />
        </div>
      </div>
    </div>
  )
}
