export default function TestimonialCard(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mx-auto relative sm:max-w-md md:w-[29rem] lg:w-[38rem] xl:max-w-2xl">
      <div className="absolute -top-10 transform translate-y-1/2">
        <img src={props.image} alt={`${props.name}`} className="rounded-full w-20 h-20 border-4 border-white" />
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-600 italic text-sm sm:text-base md:text-[14px] lg:text-md xl:text-lg">
          <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-300 font-serif">“</span>
          {props.message}
        </p>
        <p className=" font-semibold text-gray-800 text-xs sm:text-sm md:text-base lg:text-lg">{props.name}-{props.job}</p>
      </div>
    </div>
  );
}
