import TrendyCard from './Components/TrendyCard';
import egypt from '../../../assets/Trendy/egypt.png';
import brazil from '../../../assets/Trendy/brazile.png';
import switzerland from '../../../assets/Trendy/swiz.png';
import egyFlag from '../../../assets/Trendy/egy.png';
import brazilFlag from '../../../assets/Trendy/bra.png';
import swizFlag from '../../../assets/Trendy/swi.png';

export default function Trendy() {
  const data = [
    {
      image: switzerland,
      flag: swizFlag,
      days: "8 Days",
      people: "25 People Going",
      title: "Switzerland",
      location: "Europe",
      price: "1,000",
      oldPrice: "1,200",
      description:
        "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
      image: brazil,
      flag: brazilFlag,
      days: "7 Days",
      people: "30 People Going",
      title: "Amazon",
      location: "Brazil",
      price: "1,223",
      oldPrice: "1,200",
      description:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
      image: egypt,
      flag: egyFlag,
      days: "5 Days",
      people: "155 People Going",
      title: "Giza",
      location: "Egypt",
      price: "900",
      oldPrice: "1,200",
      description:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
  ];

  return (
    <div className="text-center py-10 mb-32 mt-24">
      <h2 className="text-orange font-bold mb-4 text-lg uppercase">Trendy</h2>
      <h1 className="text-4xl font-bold mb-10">Our Trending Tour<br />Packages</h1>
      <div className="flex flex-wrap justify-center gap-10 md:gap-20">
        {data.map((e, i) => (<TrendyCard key={i} image={e.image} flag={e.flag} days={e.days}
        people={e.people} title={e.title} location={e.location} price={e.price} 
        oldPrice={e.oldPrice} rating={e.rating} description={e.description}/>))}
      </div>
    </div>
  );
}