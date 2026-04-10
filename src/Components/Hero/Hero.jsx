import React, { useEffect, useState, useRef } from 'react';
import './Hero.scss';
import ryan from '../../assets/ryan-cartoon.svg';
import ryanPoked from '../../assets/ryan-cartoon1.svg';

function Hero() {
  const [conversations, setConversations] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPoked, setIsPoked] = useState(false);
  const [currentImage, setCurrentImage] = useState(ryan);
  const [bubbleMessage, setBubbleMessage] = useState("Hey there! I'm Ryan.");
  const chatThreadRef = useRef(null);

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return;

    const userMessage = userInput.trim();
    setUserInput('');
    setConversations(prev => [...prev, { type: 'user', message: userMessage }]);
    setBubbleMessage('Thinking...');
    setIsLoading(true);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5001'}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });

      if (response.ok) {
        const data = await response.json();
        setConversations(prev => [...prev, { type: 'ai', message: data.reply }]);
        setBubbleMessage('Ask me more.');
      } else if (response.status === 429) {
        setConversations(prev => [...prev, { type: 'ai', message: 'Too many messages. Wait a moment and try again.' }]);
        setBubbleMessage('Slow down!');
      } else {
        setConversations(prev => [...prev, { type: 'ai', message: 'Something went wrong. Try again.' }]);
        setBubbleMessage('Oops.');
      }
    } catch {
      setConversations(prev => [...prev, { type: 'ai', message: 'Chat server is offline. Reach out via the Contact page instead.' }]);
      setBubbleMessage('Server offline.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatThreadRef.current) {
      chatThreadRef.current.scrollTop = chatThreadRef.current.scrollHeight;
    }
  }, [conversations]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  const handleImageClick = () => {
    if (isPoked) return;
    setIsPoked(true);
    setCurrentImage(ryanPoked);
    setBubbleMessage("Please don't poke me.");
    setTimeout(() => {
      setIsPoked(false);
      setCurrentImage(ryan);
      setBubbleMessage(conversations.length > 0 ? 'Ask me more.' : "Hey there! I'm Ryan.");
    }, 2000);
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__name">Ryan Yee</h1>
          <p className="hero__tagline">Full Stack Developer</p>
          <p className="hero__skills">
            TypeScript · React · Python · Django · Node.js · PostgreSQL
          </p>
          <div className="hero__cta">
            <a href="#projects" className="hero__btn hero__btn--primary">View My Work</a>
            <a href="/contact" className="hero__btn hero__btn--secondary">Let's Connect</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__avatar">
            <img
              src={currentImage}
              alt="Ryan Yee"
              className={`hero__image ${isPoked ? 'hero__image--poked' : ''}`}
              onClick={handleImageClick}
            />
            <p className="hero__bubble">{bubbleMessage}{isLoading && ' ...'}</p>
          </div>

          {conversations.length > 0 && (
            <div className="hero__chat-log" ref={chatThreadRef}>
              {conversations.map((c, i) => (
                <p key={i} className={`hero__chat-line hero__chat-line--${c.type}`}>
                  <span className="hero__chat-label">{c.type === 'user' ? 'You' : 'Ryan'}:</span>{' '}
                  {c.message}
                </p>
              ))}
              {isLoading && (
                <p className="hero__chat-line hero__chat-line--ai">
                  <span className="hero__chat-label">Ryan:</span> ...
                </p>
              )}
            </div>
          )}

          <div className="hero__input-row">
            <span className="hero__prompt">&gt;</span>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="ask me anything"
              className="hero__input"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !userInput.trim()}
              className="hero__send"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
