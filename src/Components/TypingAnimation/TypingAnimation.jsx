import React, { useState, useEffect } from 'react';

function TypingAnimation({ texts }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingSpeed = 50; // Adjust typing speed as needed
    const eraseDelay = 1000; // Delay before erasing text (1 second)

    let timer;

    if (isTyping) {
      const currentText = texts[currentIndex];
      if (displayText !== currentText) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsTyping(false); // Start erasing
        }, eraseDelay);
      }
    } else {
      if (displayText !== '') {
        timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, typingSpeed);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true); // Start typing a new text
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [displayText, isTyping, texts, currentIndex]);

  return <span>{displayText}</span>;
}

export default TypingAnimation;
