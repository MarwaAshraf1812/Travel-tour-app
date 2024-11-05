import { useState } from 'react';
function BuildPackageForm( Props ) {
const [destin, setDestin] = useState([{ id: 1, value: '' }]);
const [date, setDate] = useState({ start: '', end: '' });
const [adults, setAdults] = useState(2);
const [boxs, setBoxs] = useState({
    culture: false, outdoors: false, relaxing: false, wildlife: false,
    romantic: false, religious: false, hiking: false, musical: false, shopping: false,
});
// Destination Function
const DestinFun = (i, v) => {
    const newD = [...destin];
    newD[i].value = v;
    setDestin(newD);
};
// Add Destination Function
const addFun = () => {
    setDestin([...destin, { id: destin.length + 1, value: '' }]);
};
// Date Function
const DateFun = (e, v) => {
    setDate({ ...date, [e]: v });
};
// Box Check Function
const BoxFun = (e) => {
    setBoxs({ ...boxs, [e]: !boxs[e] });
};
const AdultsFun = (e) => {
    setAdults(e.target.value);
};

const SubmitFun = () => {
    
};

return (
    <div className="relative  bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-full sm:max-w-md inset-0 w-full mx-auto  max-h-[75vh] overflow-y-auto">
    {/* Close button */}
    <button onClick={Props.Close} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        ✕
    </button>
    <h2 className="text-lg sm:text-2xl font-bold mb-4 text-center text-gray-800">Build Your Own Package</h2>
    {/* Destinations */}
    {destin.map((destin, index) => (
        <input key={destin.id} type="text" placeholder="Enter destination (country, region or city)" value={destin.value}
            onChange={(e) => DestinFun(index, e.target.value)}
            className="w-full p-2 sm:p-3 mb-3 border border-gray-300 rounded text-black"
        />
    ))}
    {/* Add Destinations button */}
    <button onClick={addFun} className="text-sm text-orange underline mb-4">+ Add destination</button>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4">
        {/* Date Range */}
        <input type="text" placeholder="Start Date" value={date.start} onChange={(e) => DateFun('startDate', e.target.value)} className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black"/>
        <input type="text" placeholder="End Date" value={date.end} onChange={(e) => DateFun('endDate', e.target.value)}className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black"/>
        {/* Number of Adults */}
        <select value={adults} onChange={AdultsFun} className="w-full p-2 sm:p-3 border border-gray-300 rounded text-black bg-white">
        <option value={1} className="text-black">1 adult</option>
        <option value={2} className="text-black">2 adults</option>
        <option value={3} className="text-black">3 adults</option>
        <option value={4} className="text-black">4 adults</option>
        </select>
    </div>
    {/* Check Boxes Div */}
    <div className="mb-4">
        <h3 className="text-md font-semibold text-left mb-2 text-gray-700">
        Activities preferences (optional)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {Object.keys(boxs).map((e) => (
            <label key={e} className="flex items-center space-x-2">
            <input type="checkbox" checked={setBoxs[e]}
                onChange={() => BoxFun(e)}
                className="form-checkbox text-orange"
            />
            <span className="text-sm text-gray-700">
                {e.charAt(0).toUpperCase() + e.slice(1)}
            </span>
            </label>
        ))}
        </div>
    </div>
    {/* Submit button */}
    <button onClick={SubmitFun} className="w-full py-2 sm:py-3 bg-orange text-white rounded font-semibold mt-4 hover:bg-orange-600">
        Build Package
    </button>
    </div>
    );
}

export default BuildPackageForm;
