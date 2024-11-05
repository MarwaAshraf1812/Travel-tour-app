import PropTypes from 'prop-types'

export default function CategoryCard({ image, category, text }) {
  return (
    <div className="p-4 rounded-3xl shadow-sm flex flex-col items-center transition-transform duration-300 transform hover:scale-105 cursor-pointer hover:bg-white">
      <img 
        src={image}
        alt={category} 
        className="w-24 h-24 object-cover mb-4 rounded-full"
      />
      <h5 className="text-lg font-semibold text-center text-dark_blue mb-2">{category}</h5>
      <p className="text-gray-600 text-center">
        {text}
      </p>
    </div>
  )
}

CategoryCard.propTypes = {
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

CategoryCard.defaultProps = {
  category: "Category Name",
  text: "Category Description",
}
