import React, { useEffect } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Hero() {
  const animation = ['A coffee enthusiast.', 'A car enthusiast.', 'A volleyball enjoyer.'];

  useEffect(() => {
    const interval = setInterval(() => {
      // Your code here to rotate through jobTitles
    }, 3000); // Change every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__title">
          <div className="hero__title-static">
            Hey there! I'm <span className="hero__name">Ryan Yee</span>
          </div>
          <div className="hero__title-inner">
            <TypingAnimation texts={['A software developer.', ...animation]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
