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
        
        <div className="hero__subtitle">
          <p className="hero__value-prop">
            I build scalable solutions that connect communities and solve real-world problems. 
            Passionate about creating intuitive user experiences and robust backend systems.
          </p>
        </div>

        <div className="hero__cta">
          <a href="#projects" className="hero__cta-button">
            View My Work
          </a>
          <a href="#contact" className="hero__cta-button hero__cta-button--secondary">
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
