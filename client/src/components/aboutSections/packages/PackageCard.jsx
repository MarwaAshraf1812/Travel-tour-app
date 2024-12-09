import PropTypes from 'prop-types';

function PackageCard({ image, date, people, title, description, price, rating }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
      <div className="w-full h-48 bg-gray-200 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="bg-orange flex justify-between items-center px-4 py-2 text-white">
        <p className="text-sm">{date}</p>
        <p className="text-sm">{people} People</p>
      </div>
      <div className="p-4 space-y-3">
        <h3 className="text-xl font-bold text-dark_blue">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-orange-500">{price}</p>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐</span>
            <p className="text-sm font-medium">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
PackageCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default PackageCard;
