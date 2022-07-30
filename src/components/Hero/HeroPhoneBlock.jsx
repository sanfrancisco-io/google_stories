import React, { useEffect, useRef } from 'react';
import './style.scss';
import imgSrc from '../../assets/hero-phone-frame-v2.png';
import { gsap } from 'gsap';
import { videoUrl } from '../../data';

const HeroPhoneBlock = () => {
  const phoneRef = useRef(null);

  useEffect(() => {
    function intro() {
      const timeLine = gsap.timeline();

      timeLine.fromTo(phoneRef.current, { y: 200 }, { y: 0, duration: 1 });
      return timeLine;
    }
    function stopTrigger() {
      const timeLine = gsap.timeline({
        delay: 1,
        scrollTrigger: {
          trigger: phoneRef.current,
          start: 'top top',
          end: '+=1000',
          pin: true,
          scrub: true,
        },
      });

      timeLine.to(phoneRef.current, { scale: 1.2 }, '+=0.2');
      timeLine.to(
        '.hero-container',
        {
          backgroundColor: 'black',
          duration: 0.25,
        },
        '-=0.5'
      );
      return timeLine;
    }

    const master = gsap.timeline();
    master.add(intro());
    setTimeout(() => {
      master.add(stopTrigger());
    }, 1000);
  }, []);

  return (
    <div className='hero-phone-black' ref={phoneRef}>
      <div
        className='hero-phone-template'
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <video
          className='collage-element'
          playsInline=''
          autoPlay
          loop
          src={videoUrl}
        ></video>
      </div>
    </div>
  );
};

export default HeroPhoneBlock;
