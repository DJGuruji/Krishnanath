import React, { useState } from 'react';
import { useBackground } from '../context/BackgroundContext';

const BackgroundToggle = () => {
  const { showBackground, bgOpacity, toggleBackground, setOpacity } = useBackground();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    toggleBackground(!showBackground);
  };

  const handleOpacityChange = (e) => {
    setOpacity(parseFloat(e.target.value));
  };

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <button 
        onClick={togglePanel}
        className="bg-yellow-800 hover:bg-yellow-700 text-yellow-200 p-2 rounded-full shadow-lg"
        title="3D Background Settings"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-2 bg-gray-900 border border-yellow-700 p-4 rounded-lg shadow-lg backdrop-blur-sm">
          <h3 className="text-yellow-200 font-medium mb-3 text-sm">3D Background Settings</h3>
          
          <div className="flex items-center mb-3">
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={showBackground}
                onChange={handleToggle}
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-500 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-800"></div>
              <span className="ms-3 text-sm font-medium text-gray-300">Enable 3D Background</span>
            </label>
          </div>
          
          {showBackground && (
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-300 mb-1">Opacity</label>
              <input 
                type="range" 
                min="0.05" 
                max="0.4" 
                step="0.01" 
                value={bgOpacity}
                onChange={handleOpacityChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Subtle</span>
                <span>Vivid</span>
              </div>
            </div>
          )}

          <button 
            onClick={togglePanel} 
            className="mt-3 text-xs text-gray-400 hover:text-gray-300 underline"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default BackgroundToggle; 