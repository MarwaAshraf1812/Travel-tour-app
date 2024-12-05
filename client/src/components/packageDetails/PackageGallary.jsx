import { useParams } from "react-router-dom";
import PackageData from './PackageData/PackageData.json';

export default function PackageGallery() {
  const { id } = useParams();
  const country = PackageData.find((e) => e.id === parseInt(id));
  const { Gallery, name } = country;

  const images = Gallery.map((image) => ({src: new URL(`../../assets/PackageDetails/Gellery/${name}/${image}`, import.meta.url).href}));

  const dimantions = [
    { cols: "col-span-1", rows: "row-span-1" },
    { cols: "col-span-3", rows: "row-span-3" },
    { cols: "col-span-1", rows: "row-span-1" },
    { cols: "col-span-1", rows: "row-span-1" },
    { cols: "col-span-3", rows: "row-span-1" },
    { cols: "col-span-1", rows: "row-span-1" },
    { cols: "col-span-4", rows: "row-span-1" }
  ];

  return (
    <div className="md:w-auto lg:w-2/3 h-[90%] w-full mb-8">
      <div className="grid grid-cols-4 gap-4 grid-rows-5">
        {images.map((image, i) => (
          <div key={i} className={`${dimantions[i]?.cols || 'col-span-1'} ${dimantions[i]?.rows || 'row-span-1'}`}>
            <img src={image.src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover"/>
          </div>
        ))}
      </div>
    </div>
  );
}
