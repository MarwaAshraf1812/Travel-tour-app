import { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    date: '',
    tickets: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="md:max-w-lg h-fit  bg-[#EDEDED] p-12  shadow-md">
      <h3 className="text-3xl font-bold text-gray-800 mb-2">Book This Tour</h3>
      <p className="text-gray-600 mb-6 text-sm">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt?
        Quo quidem neque iste expedita est dolo.
      </p>

      <form className="space-y-4 " onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 border  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <input
            type="email"
            name="confirmEmail"
            placeholder="Confirm Email"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="w-full p-4 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-4 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <input
            type="date"
            name="date"
            placeholder="dd-mm-yy"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <input
            type="number"
            name="tickets"
            placeholder="Number of ticket"
            value={formData.tickets}
            onChange={handleChange}
            className="w-full p-4 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div className="relative">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            rows="2"
          ></textarea>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <button

          className="mt-4 py-2 px-4 bg-orange text-white font-semibold rounded-lg hover:bg-white  hover:text-orange border  hover:border-orange  transition w-[55%]"
        >
          Check Availability
        </button>
        <button
          type="submit"
          className="mt-4 py-2 px-4 bg-orange text-white font-semibold rounded-lg hover:bg-white  hover:text-orange border  hover:border-orange  transition w-[55%]"
        >
          Book Now
        </button> 
        </div>
      </form>
    </div>
  );
}
