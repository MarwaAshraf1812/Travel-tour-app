import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <nav className="bg-transparent">
      <div className="max-w-6xl mx-auto p-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-black text-2xl">Travel</h1>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            <Link
              to="/"
              className="relative text-black hover:text-orange px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative text-black hover:text-orange px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center text-black hover:text-orange px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
                <span className={`ml-1 w-4 h-4 transform transition-transform hover:text-orange duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 z-10 bg-transparent text-black mt-2 w-56 rounded-md shadow-lg">
                  <Link to="/service1" className="block px-4 py-2 hover:bg-orange hover:text-white">Honeymoon Packages</Link>
                  <Link to="/service2" className="block px-4 py-2 hover:bg-orange hover:text-white">Tours Packages</Link>
                  <Link to="/service3" className="block px-4 py-2 hover:bg-orange hover:text-white">Musical Events</Link>
                  <Link to="/service4" className="block px-4 py-2 hover:bg-orange hover:text-white">Build Package</Link>
                </div>
              )}
            </div>
            <Link
              to="/contact"
              className="relative text-black hover:text-orange px-3 py-2 rounded-md text-sm font-medium"
            >
              Upcoming Packages
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className={`text-black  hover:text-orange p-2 rounded-md transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
          <button className="bg-orange hover:opacity-90 text-white px-4 py-2 rounded-md ml-4">
            Get In Touch
          </button>
        </div>
        {isOpen && (
          <div className="sm:hidden">
            <Link to="/" className="block text-black hover:bg-orange hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="block text-black hover:bg-orange hover:text-white px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/services" className="block text-black hover:bg-orange hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Services
            </Link>
            <Link to="/contact" className="block text-black hover:bg-orange hover:text-white px-3 py-2 rounded-md text-base font-medium">
              Upcoming Packages
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
