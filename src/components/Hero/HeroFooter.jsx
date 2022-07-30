import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './style.scss';

const HeroFooter = () => {
  const ref = useRef(null);

  useEffect(() => {
    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: 'top center',
        scrub: true,
      },
    });
    timeLine.to(
      '.hero-container',
      { backgroundColor: 'white', duration: 1 },
      '-=2'
    );
  }, []);

  return (
    <div ref={ref} className='hero-text-section'>
      <h1>Visual stories that feel like yours, because they are.</h1>
    </div>
  );
};

export default HeroFooter;
