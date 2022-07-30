import React, { useEffect, useRef, useState } from 'react';
import { featureSlides } from '../../data';
import cn from 'classnames';
import FeatureSlide from './FeatureSlide';
import { gsap } from 'gsap';

function RenderImages({ activeFeatureIndex }) {
  return featureSlides.map(({ imageUrl }, index) => (
    <img
      className={cn({ 'as-primary': activeFeatureIndex === index })}
      key={imageUrl}
      style={{ backgroundImage: `url(${imageUrl})` }}
      alt=''
    />
  ));
}

const FeatureSlides = () => {
  const [activeFeatureIndex, setFeatureIndex] = useState(0);
  const FeatureSliderRef = useRef(null);
  const FeatureSliderRightRef = useRef(null);

  useEffect(() => {
    function stopTrigger() {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: FeatureSliderRightRef.current,
          start: 'top top',
          end: () => `+=${FeatureSliderRef.current.offsetHeight}`,
          scrub: true,
          pin: true,
        },
      });
      return timeLine;
    }
    const master = gsap.timeline();
    master.add(stopTrigger());
  }, []);
  return (
    <div ref={FeatureSliderRef} className='feature-slides-container'>
      <div className='feature-slides-left'>
        {featureSlides.map((item, index) => (
          <FeatureSlide
            key={item.imageUrl}
            title={item.title}
            description={item.description}
            index={index}
            updateActiveImage={setFeatureIndex}
          />
        ))}
      </div>
      <div ref={FeatureSliderRightRef} className='feature-slides-right'>
        <RenderImages activeFeatureIndex={activeFeatureIndex} />
      </div>
    </div>
  );
};

export default FeatureSlides;
