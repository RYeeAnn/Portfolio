// Hero.jsx

import React, { useState, useEffect } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';

function Hero() {
  const jobTitles = ['Front-end Developer', 'Back-end Developer', 'Software Engineer'];
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
    }, 3000); // Change every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentTitle = jobTitles[jobIndex];

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__title">
        <TypingAnimation texts={['Hello there! My name is Ryan :)','Front-end Developer', 'Back-end Developer', 'Software Engineer']} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
