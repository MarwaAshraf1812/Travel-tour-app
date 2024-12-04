import { useParams } from "react-router-dom";
import PackageData from './PackageData/PackageData.json';

export default function PackageGallery() {
  const { id } = useParams();
  const country = PackageData.find((e) => e.id === parseInt(id));
  const { Gallery, name } = country;
  const dim= [
    { col: 1, row: 1, alt: "1" },
    { col: 3, row: 3, alt: "2" },
    { col: 1, row: 1, alt: "3" },
    { col: 1, row: 1, alt: "4" },
    { col: 3, row: 1, alt: "5" },
    { col: 1, row: 1, alt: "6" },
    { col: 4, row: 1, alt: "7" },
  ];
  const images = Gallery.map((img, i) => ({src: new URL(`../../assets/PackageDetails/Gellery/${name}/${img}`, import.meta.url).href,...dim[i],}));
  return (
    <div className="lg:w-[80%] w-full h-[80%] mb-6">
      <div className="grid grid-cols-4 gap-2 grid-rows-5">
        {images.map((img, i) => (
          <div key={i} className={`col-span-${img.col} row-span-${img.row}  hover:opacity-90 hover:shadow-lg cursor-pointer`}>
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}
