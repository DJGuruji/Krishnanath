import React, { useEffect } from 'react';
import './App.css';
import HomeRouter from './router/HomeRouter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
      <HomeRouter />
     <Footer></Footer>
    
    </>
  );
}

export default App;
