import React, { useEffect, useState, useRef } from 'react';
import './Hero.scss';
import ryan from '../../assets/ryan-cartoon.svg';
import ryanPoked from '../../assets/ryan-cartoon1.svg';

function Hero() {
  const [conversations, setConversations] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPoked, setIsPoked] = useState(false);
  const [currentImage, setCurrentImage] = useState(ryan);
  const [bubbleMessage, setBubbleMessage] = useState("Hey there! I'm Ryan 👋");
  const chatThreadRef = useRef(null);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const userMessage = userInput.trim();
    setUserInput("");

    // Add user message to conversation
    setConversations(prev => [...prev, { type: 'user', message: userMessage }]);

    // Update bubble to show thinking state
    setBubbleMessage("Thinking...");

    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setConversations(prev => [...prev, { type: 'ai', message: data.reply }]);
        setBubbleMessage("Ask me more!");
      } else if (response.status === 429) {
        setConversations(prev => [...prev, { type: 'ai', message: "Too many messages! Please wait a bit before trying again." }]);
        setBubbleMessage("Slow down!");
      } else {
        setConversations(prev => [...prev, { type: 'ai', message: "Oops! Something went wrong. Try again!" }]);
        setBubbleMessage("Oops!");
      }
    } catch (error) {
      console.error('Chat error:', error);
      setConversations(prev => [...prev, { type: 'ai', message: "Sorry, I'm having trouble responding right now!" }]);
      setBubbleMessage("Error!");
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-scroll to bottom of chat thread
  useEffect(() => {
    if (chatThreadRef.current) {
      chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
    }
  }, [conversations]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleImageClick = () => {
    if (isPoked) return; // Prevent multiple rapid clicks

    setIsPoked(true);
    setCurrentImage(ryanPoked);
    setBubbleMessage("Please don't poke me");

    // Revert back after 2 seconds
    setTimeout(() => {
      setIsPoked(false);
      setCurrentImage(ryan);
      setBubbleMessage(conversations.length > 0 ? "Ask me more!" : "Hey there! I'm Ryan 👋");
    }, 2000);
  };

  return (
    <div className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__intro">
            <h1 className="hero__name">Ryan Yee</h1>
            <p className="hero__tagline">Full Stack Developer</p>
          </div>


          <div className="hero__cta">
            <a href="#about" className="hero__cta-button hero__cta-button--primary">
              View My Work
            </a>
            <a href="/contact" className="hero__cta-button hero__cta-button--secondary">
              Let's Connect
            </a>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className={`hero__chat-wrapper ${conversations.length > 0 ? 'hero__chat-wrapper--active' : ''}`}>
            <div className="hero__avatar-section">
              <div className="hero__image-container">
                <img
                  src={currentImage}
                  alt="Ryan Yee - Software Developer"
                  className={`hero__image ${isPoked ? 'hero__image--poked' : ''}`}
                  onClick={handleImageClick}
                  style={{ cursor: 'pointer' }}
                />
                <div className="hero__image-overlay"></div>

                {/* Small status bubble - always visible */}
                <div className="hero__speech-bubble">
                  <div className="hero__speech-content">
                    {bubbleMessage}
                    {isLoading && <span className="hero__typing-dots">...</span>}
                  </div>
                </div>
              </div>
            </div>

            {/* Conversation Thread - appears when there are messages */}
            {conversations.length > 0 && (
              <div className="hero__chat-thread" ref={chatThreadRef}>
                {conversations.map((conv, index) => (
                  <div
                    key={index}
                    className={`hero__chat-message hero__chat-message--${conv.type}`}
                  >
                    {conv.type === 'ai' && (
                      <div className="hero__chat-avatar">
                        <img src={ryan} alt="Ryan" />
                      </div>
                    )}
                    <div className="hero__chat-bubble">
                      <p>{conv.message}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="hero__chat-message hero__chat-message--ai">
                    <div className="hero__chat-avatar">
                      <img src={ryan} alt="Ryan" />
                    </div>
                    <div className="hero__chat-bubble hero__chat-bubble--typing">
                      <span className="hero__typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Chat Input Section */}
          <div className="hero__chat-section">
            <div className="hero__chat-container">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
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
