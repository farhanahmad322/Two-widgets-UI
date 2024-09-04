import { useState } from 'react';

const InfoWidget = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  const tabs = ['About Me', 'Experiences', 'Recommended'];

  const renderContent = () => {
    switch (activeTab) {
      case 'About Me':
        return <p>Hello! I’m Dave, your sales rep here from Salesforce...</p>;
      case 'Experiences':
        return <p>Experience content goes here...</p>;
      case 'Recommended':
        return <p>Recommended content goes here...</p>;
      default:
        return null;
    }
  };

  
  const getSliderPosition = () => {
    switch (activeTab) {
      case 'About Me':
        return 'translate-x-0'; 
      case 'Experiences':
        return 'translate-x-full'; 
      case 'Recommended':
        return 'translate-x-[200%]'; 
      default:
        return 'translate-x-0';
    }
  };

  return (
    <div className="bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg text-white relative max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
      <div className="relative flex space-x-2 sm:space-x-4 mb-4 group bg-gray-900 rounded-lg p-1 overflow-hidden">
       
        <div
          className={`absolute inset-0 h-full w-1/3 bg-gray-700 rounded-lg transition-transform duration-500 ease-in-out ${getSliderPosition()} group-hover:scale-90 group-hover:shadow-2xl`}
        />

        
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`relative z-10 py-2 px-3 sm:px-4 md:px-6 rounded-lg transition duration-300 ${
              activeTab === tab ? 'text-white' : 'text-gray-400'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="overflow-auto">{renderContent()}</div>
    </div>
  );
};

export default InfoWidget;
