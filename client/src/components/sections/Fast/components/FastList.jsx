import PropTypes from 'prop-types';

export default function FastList({ icon, bgColor, title, description }) {
  return (
    <div className="flex space-x-4 items-center">
      <div className={`p-3 rounded-full ${bgColor}`}>
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold text-dark_blue">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

FastList.propTypes = {
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
