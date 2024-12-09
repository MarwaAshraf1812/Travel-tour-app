import PropTypes from 'prop-types';

export default function TripForm({ data }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-dark_blue">Search for Your Perfect Tour</h2>
        <p className="text-gray-600">
          Plan your trip and explore amazing destinations tailored to your preferences.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Where to Go</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            placeholder="Destination"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Search Tour</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
            placeholder="Tour Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Filter by Price</label>
          <select
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Price Range</option>
            <option value="low">$0 - $500</option>
            <option value="medium">$500 - $1,000</option>
            <option value="high">$1,000+</option>
          </select>
        </div>

        <button
          type="button"
          className="w-full py-2 px-4 bg-orange text-white font-medium rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}

TripForm.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
