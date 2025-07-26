import React, { useEffect, useState } from 'react';
import dataService from '../services/dataService';

const Hero = () => {
  const hero = dataService.getHeroContent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1>{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <p className="hero-description">{hero.description}</p>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <span>Premium Quality</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">👥</span>
              <span>Unisex Services</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏆</span>
              <span>Expert Stylists</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow">↓</div>
        <span>Explore Services</span>
      </div>
    </section>
  );
};

export default Hero; 