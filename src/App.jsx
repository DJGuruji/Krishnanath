import React, { useEffect } from 'react';
import './App.css';
import HomeRouter from './router/HomeRouter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import { BackgroundProvider } from './context/BackgroundContext';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <BackgroundProvider>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <HomeRouter />
        </div>
        <Footer />
      </div>
    </BackgroundProvider>
  );
}

export default App;
