import Background from '../../assets/Testimonial/Testimonial.png';
import Travel from '../../assets/Testimonial/Travel.png';
import user1 from '../../assets/Testimonial/user1.png';
import user3 from '../../assets/Testimonial/user3.png';
import user4 from '../../assets/Testimonial/user4.png';
import TestimonialCard from '../common/cards/TestmonialCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const data = [
    {
      name: 'Jac',
      job: 'Designer',
      image: user1,
      message: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
    },
    {
      name: 'Christine',
      job: 'Designer',
      image: user4,
      message: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
    },
    {
      name: 'Omar',
      job: 'Designer',
      image: user3,
      message: 'Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.'
    }
  ];

  return (
    <div className="flex flex-col gap-y-6 items-center relative w-full top-250 xl:p-[102px] lg:p-[56px] md:p-0 lg:p-9">
      <img src={Background} alt="Background" className="absolute top-0 left-0 w-full  h-full object-cover -z-10 hidden md:block" />
      <img src={Travel} alt="Travel" className="absolute bottom-0 left-0 xl:w-[18rem] md:w-32 hidden md:block" />
      <div className="text-center xl:mb-8 lg:mb-4 lg:mt-4 z-10 py-6 max-[600px]:py-12 max-[600px]:h-32">
        <p className="text-primary md:mt-3 tracking-widest font-Volkhov text-lg max-[700px]:text-xl">PROMOTION</p>
        <h2 className="xl:text-4xl max-[600]:text-3xl md:text-lg lg:text-2xl font-bold font-Volkhov text-gray-800 max-[700px]:text-xl">See What Our Clients Say</h2>
        <h2 className="xl:text-4xl max-[600]:text-3xl md:text-lg lg:text-2xl font-bold font-Volkhov text-gray-800 max-[700px]:text-xl">About Us</h2>
      </div>

      <div className="w-full max-w-2xl mx-auto px-4">
        <Slider {...settings}>
          {data.map((e, index) => (
            <div key={index} className="px-4">
              <TestimonialCard image={e.image} name={e.name} job={e.job} message={e.message} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
