import PropTypes from 'prop-types';

export default function Chart({ gradient, percentage }) {
  return (
    <div className="w-full flex justify-center items-center">
      <div className='flex justify-center items-center w-[110px] h-[110px]  rounded-full shadow-inner-custom'>
      <div className={`flex justify-center items-center w-[110px] h-[110px] ${gradient} rounded-full `}>
        <div className="flex justify-center items-center w-[90px] h-[90px] bg-white rounded-full shadow-lg ">
          <div className='flex justify-center items-center w-[90px] h-[90px] bg-white rounded-full shadow-lg '><p className="text-black text-3xl">{percentage}%</p></div>
        </div>
      </div>
    </div>
    </div>
  );
}

Chart.propTypes = {
  gradient: PropTypes.oneOf([
    'bg-conic-gradient-1',
    'bg-conic-gradient-2',
    'bg-conic-gradient-3',
  ]).isRequired,
  percentage: PropTypes.number.isRequired,
};
