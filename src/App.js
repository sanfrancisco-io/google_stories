import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureSlides from './components/FutureSlides';

function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  return loader ? (
    <div className='loader' />
  ) : (
    <div>
      <Hero />
      <FeatureSlides />
      <div className='footer'>Build your ideal story today.</div>
    </div>
  );
}

export default App;
