import React, { useEffect } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import ryan from '../../assets/ryan.jpg';

function Hero() {
  const animation = [
    'A coffee enthusiast.',
    'A car enthusiast.', 
    'A volleyball enjoyer.',
    'A problem solver.'
  ];

  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__intro">
            <span className="hero__greeting">Hey there! I'm</span>
            <h1 className="hero__name">Ryan Yee</h1>
          </div>
          
          <div className="hero__title">
            <TypingAnimation texts={['A software developer.', ...animation]} />
          </div>
          
          <p className="hero__description">
            I build digital experiences that solve real problems and bring people together. 
            Based in Vancouver, BC, crafting code with purpose.
          </p>
          
          <div className="hero__cta">
            <a href="#projects" className="hero__cta-button hero__cta-button--primary">
              View My Work
            </a>
            <a href="#contact" className="hero__cta-button hero__cta-button--secondary">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="hero__image-container">
            <img 
              src={ryan} 
              alt="Ryan Yee - Software Developer" 
              className="hero__image"
            />
            <div className="hero__image-overlay"></div>
          </div>
        </div>
      </div>
      
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-arrow"></div>
      </div>
    </div>
  );
}

export default Hero;
