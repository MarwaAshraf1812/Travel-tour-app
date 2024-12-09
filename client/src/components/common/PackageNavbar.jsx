import WebFont from 'webfontloader';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function PackageNavbar({ activeTab, setActiveTab, tabsConfig }) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Yesteryear', 'cursive'],
      },
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#F8F8F8] border-gray-200 max-[766px]:text-center">
      <div className="flex justify-between items-center max-w-7xl h-28 px-4 lg:px-0 mx-auto">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none flex justify-center items-center w-full"
          onClick={toggleDropdown}
        >
          <span
            className="text-5xl text-orange"
            style={{ fontFamily: 'Yesteryear' }}
          >
            Menu
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-around w-full h-full">
          {tabsConfig.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center justify-center h-[100%] w-[25%] font-semibold transition-colors duration-300 ${
                activeTab === tab.key ? 'bg-white text-gray-900' : 'text-gray-700'
              }`}
            >
              {tab.icon && (
                <img
                  src={tab.icon}
                  alt={`${tab.label} Icon`}
                  className="mr-4 w-6 h-6"
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col space-y-4 mt-4 bg-[#EDEDED] p-4 mx-4">
          {tabsConfig.map((tab) => (
            <button
              key={tab.key}
              className={`${
                activeTab === tab.key
                  ? 'bg-orange text-white rounded-lg'
                  : 'text-orange'
              } hover:bg-orange hover:rounded-lg hover:text-white`}
              onClick={() => {
                setActiveTab(tab.key);
                setIsOpen(false);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

PackageNavbar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  tabsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

