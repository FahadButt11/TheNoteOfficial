import React from 'react';

const Banner = ({ title, description, buttonLabel }) => (
  <section className="hero banner-2">
    <div className="hero-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{buttonLabel}</button>
    </div>
  </section>
);

export default Banner;
