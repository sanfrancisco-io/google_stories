import React, { useEffect } from 'react';
import { photos, videos } from '../../data';
import { gsap } from 'gsap';
import './style.scss';

function VideoElement({ src }) {
  return (
    <div className='hero-element'>
      <video
        className='collage-element'
        playsInline=''
        autoPlay
        loop
        src={src}
      ></video>
    </div>
  );
}

function ImageElement({ src }) {
  return (
    <div className='hero-element'>
      <img src={src} alt='' className='collage-element' />
    </div>
  );
}

const HeroCollage = () => {
  const leftImages = photos.slice(0, 2);
  const rightImages = photos.slice(2, photos.length);

  const [leftVideo, rightVideo] = videos;

  useEffect(() => {
    const timeLine = gsap.timeline({
      delay: 0.5,
    });

    timeLine.fromTo(
      '.hero-element',
      { y: 300 },
      {
        y: 0,
        duration: 1,
        delay: (index) => {
          return 0.2 * index;
        },
      }
    );
  }, []);

  return (
    <div className='hero-collage'>
      <div className='left-column'>
        {leftImages.map((src, index) => (
          <ImageElement src={src} key={index} />
        ))}
        <VideoElement src={leftVideo} />
      </div>
      <div className='right-column'>
        {rightImages.map((src, index) => (
          <ImageElement src={src} key={index} />
        ))}
        <VideoElement src={rightVideo} />
      </div>
    </div>
  );
};

export default HeroCollage;
