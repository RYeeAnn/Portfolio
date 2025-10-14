import React, { useEffect, useState } from 'react';
import './Hero.scss';
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import ryan from '../../assets/ryan-cartoon.svg';
import ryanPoked from '../../assets/ryan-cartoon1.svg';

function Hero() {
  const animation = [
    'Based in Vancouver, BC.',
  ];

  const [chatMessage, setChatMessage] = useState("Hey there! I'm Ryan 👋");
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPoked, setIsPoked] = useState(false);
  const [currentImage, setCurrentImage] = useState(ryan);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (response.ok) {
        const data = await response.json();
        setChatMessage(data.reply);
        setUserInput("");
      } else {
        setChatMessage("Oops! Something went wrong. Try again!");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessage("Sorry, I'm having trouble responding right now!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleImageClick = () => {
    if (isPoked) return; // Prevent multiple rapid clicks
    
    setIsPoked(true);
    setCurrentImage(ryanPoked);
    setChatMessage("Please don't poke me");
    
    // Revert back after 2 seconds
    setTimeout(() => {
      setIsPoked(false);
      setCurrentImage(ryan);
      setChatMessage("Hey there! I'm Ryan 👋");
    }, 2000);
  };

  useEffect(() => {
    // Component mounted
  }, []);

  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__intro">
            {/* <span className="hero__greeting">Hey there! I'm</span> */}
            <h1 className="hero__name">Ryan Yee</h1>
          </div>
          
          {/* <div className="hero__title">
            <TypingAnimation texts={['A software developer.', ...animation]} />
          </div>
          
          <p className="hero__description">
            I build digital experiences that solve real problems and bring people together. 
          </p> */}
          
          <div className="hero__cta">
            <a href="#projects" className="hero__cta-button hero__cta-button--primary">
              View My Work
            </a>
            <a href="/contact" className="hero__cta-button hero__cta-button--secondary">
              Let's Connect
            </a>
          </div>
          
          <div className="hero__social">
            <a 
              href="https://drive.google.com/file/d/11w7jkjgk0GMLCsrx0JB9xhxbf8n8krnc/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero__social-link"
              aria-label="Resume"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
              Resume
            </a>
            <a 
              href="https://www.linkedin.com/in/ryeean/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/RYeeAnn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero__social-link"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="hero__image-container">
            <img 
              src={currentImage} 
              alt="Ryan Yee - Software Developer" 
              className={`hero__image ${isPoked ? 'hero__image--poked' : ''}`}
              onClick={handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <div className="hero__image-overlay"></div>
            
            {/* Speech Bubble */}
            <div className="hero__speech-bubble">
              <div className="hero__speech-content">
                {chatMessage}
                {isLoading && <span className="hero__typing-dots">...</span>}
              </div>
              <div className="hero__speech-tail"></div>
            </div>
          </div>
          
          {/* Chat Input Section - Below the cartoon image */}
          <div className="hero__chat-section">
            <div className="hero__chat-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything..."
                className="hero__chat-input"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !userInput.trim()}
                className="hero__chat-button"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
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
