import React from 'react';
import {NavLink} from 'react-router-dom';

const HeroSection = ({ title, description, buttonLabel }) => (
  <section className="hero">
    <div className="hero-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <NavLink to="/men-collection">
      <button>{buttonLabel}</button>

      </NavLink>
    </div>
  </section>
);

export default HeroSection;
