import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const BackgroundContext = createContext();

// Custom hook to use the background context
export const useBackground = () => {
  return useContext(BackgroundContext);
};

// Provider component
export const BackgroundProvider = ({ children }) => {
  // Try to load settings from localStorage first
  const [showBackground, setShowBackground] = useState(true);
  const [bgOpacity, setBgOpacity] = useState(0.2);
  const [initialized, setInitialized] = useState(false);

  // Initialize values from localStorage on first mount
  useEffect(() => {
    try {
      const storedShowBackground = localStorage.getItem('showBackground');
      const storedBgOpacity = localStorage.getItem('bgOpacity');
      
      if (storedShowBackground !== null) {
        setShowBackground(storedShowBackground === 'true');
      }
      
      if (storedBgOpacity !== null) {
        setBgOpacity(parseFloat(storedBgOpacity));
      }
    } catch (error) {
      console.log('Error reading from localStorage:', error);
    }
    
    setInitialized(true);
  }, []);

  // Save settings to localStorage when they change
  useEffect(() => {
    if (!initialized) return;
    
    try {
      localStorage.setItem('showBackground', showBackground.toString());
      localStorage.setItem('bgOpacity', bgOpacity.toString());
    } catch (error) {
      console.log('Error writing to localStorage:', error);
    }
  }, [showBackground, bgOpacity, initialized]);

  // Toggle the background
  const toggleBackground = (isEnabled) => {
    setShowBackground(isEnabled);
  };

  // Set the opacity
  const setOpacity = (value) => {
    setBgOpacity(value);
  };

  // The context value
  const value = {
    showBackground,
    bgOpacity,
    toggleBackground,
    setOpacity
  };

  return (
    <BackgroundContext.Provider value={value}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundContext; 