import PackageData from '../PackageData/PackageData.json'
import { useParams } from 'react-router-dom';
export default function InfoGallery() {
  const { id } = useParams();
  const Countery = PackageData.find((e) => e.id === parseInt(id));
  const { info_image , name } = Countery;
  const images = info_image.map((img) => new URL(`../../../assets/PackageDetails/${name}/${img}`, import.meta.url).href);
  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">From our gallery</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
        Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem At
        praesentium voluptatem aut libero nisi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((src, index) => (
          <img key={index} src={src} alt={`Package Image ${index + 1}`} className="w-full h-auto"/>
        ))}
      </div>
    </div>
  )
}
