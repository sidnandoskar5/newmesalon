import React from 'react';
import dataService from '../services/dataService';

const Hero = () => {
  const hero = dataService.getHeroContent();

  return (
    <section className="hero">
      <div className="container">
        <h1>{hero.title}</h1>
        <p>{hero.subtitle}</p>
        <p>{hero.description}</p>
      </div>
    </section>
  );
};

export default Hero; 