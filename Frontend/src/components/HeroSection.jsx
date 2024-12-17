import React from 'react';

const HeroSection = ({ title, description, buttonLabel }) => (
  <section className="hero">
    <div className="hero-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonLabel}</button>
    </div>
  </section>
);

export default HeroSection;
