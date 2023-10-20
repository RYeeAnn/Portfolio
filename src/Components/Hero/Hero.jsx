import React, { useEffect } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Hero() {
  const jobTitles = ['I am a Software Engineer based in Vancouver, BC.', 'Enjoy your stay :)'];

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
          <div className="hero__title-inner">
            <TypingAnimation texts={['Welcome!', ...jobTitles]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
