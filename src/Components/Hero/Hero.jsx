import React, { useEffect } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Hero() {
  const jobTitles = ['Front-end Developer', 'Back-end Developer', 'Full-stack Developer'];

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
          <TypingAnimation texts={['Hello there! My name is Ryan Yee', ...jobTitles]} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
