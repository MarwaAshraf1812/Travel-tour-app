import Line from '../../assets/PackageDetails/Plan/Line.png';
import PackageData from './PackageData/PackageData.json'
import { useParams } from 'react-router-dom'

function PackagePlan() {
  const { id } = useParams();
  const Country = PackageData.find((e) => e.id === parseInt(id));
  const {plan} = Country;
  
  return (
    <div className="max-w-2xl mb-8"> 
      <h2 className="text-3xl mb-7 font-bold font-Volkhov text-black ">Tour Plan</h2>
      {plan.map((day, index) => (
        <div key={index} className="relative flex items-start mb-8 pl-12">
          <div className="absolute left-0 top-0 w-10 h-10 bg-orange text-white font-bold rounded-lg flex items-center justify-center text-lg">
            {day.day}
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-orange mb-5">{day.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{day.description}</p>
            <ul className="list-none mt-2 space-y-1">
              {day.details.map((detail, i) => (
                <li key={i} className="text-sm text-gray-600 mb-2">• {detail}</li>
              ))}
            </ul>
          </div>
          {index < plan.length-1 && (
            <img src={Line} alt="dotted line" className="absolute  left-5 top-12 h-full mb-2" />
          )}
        </div>
      ))}
    </div>
  );
}

export default PackagePlan;
