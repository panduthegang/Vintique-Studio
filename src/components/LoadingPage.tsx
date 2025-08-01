import React, { useState, useEffect } from 'react';

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState(88);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }
        // Simulate realistic loading progression
        const increment = Math.random() * 2 + 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      {/* Animated background pattern */}
      <div className="loading-background"></div>
      
      {/* Main content */}
      <div className="loading-content">
        {/* Progress counter */}
        <div className="progress-counter">
          <span className="progress-number">{Math.floor(progress)}</span>
          <span className="progress-separator"> - </span>
          <span className="progress-total">100</span>
        </div>

        {/* Main heading */}
        <h1 className="loading-heading">
          <span className="heading-line">YOUR</span>
          <span className="heading-line">WEB EXPERIENCE</span>
          <span className="heading-line">
            IS LOADING RIGHT{' '}
            <span className="heading-now">NOW</span>
          </span>
        </h1>

        {/* Loading message */}
        <div className="loading-message">
          <p className="message-text">Crafting your experience</p>
          <p className="message-subtext">where vintage meets modern</p>
        </div>

        {/* Loading dots animation */}
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;