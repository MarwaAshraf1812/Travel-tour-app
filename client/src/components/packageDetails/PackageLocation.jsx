import PackageData from './PackageData/PackageData.json'
import { useParams } from "react-router-dom";
export default function PackageLocation() {
  const { id } = useParams();
  const country = PackageData.find((e) => e.id === parseInt(id));
  const { coordinates, description } = country;
  return (
    <div className='lg:w-2/3 w-full mb-11'>
      <h2 className="text-xl font-bold">Location</h2>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4">
        <iframe
          src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=10&output=embed`}
          width="100%"
          height="650"
          loading="lazy"
        ></iframe>
      </div>
      <p className="mt-8 text-gray-600">
      Sit quasi soluta non temporibus voluptas non necessitatibus tempore sit deleniti praesentium aut velit nostrum ut itaque atque ad expedita veniam. Hic deleniti officiis est sapiente explicabo non eaque corporis aut voluptatum iusto At facere enim id voluptas reprehenderit. 
      </p>
      <p className="mt-11 text-gray-600">
      Ut voluptas laudantium et molestias voluptatem ex doloremque omnis est ipsum nihil. Quo facere eveniet 33 sint rerum est internos impedit sed dignissimos quia. Et rerum deleniti et voluptates saepe qui labore quisquam non accusantium temporibus. Quo velit numquam hic excepturi sequi sed dicta doloribus! In quos possimus quo quibusdam aliquid est culpa porro sed molestiae libero At blanditiis minima a reiciendis fugiat.
      </p>
    </div>
  );
}