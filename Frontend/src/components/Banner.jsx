import React from 'react';
import {NavLink} from 'react-router-dom';

const Banner = ({ title, description, buttonLabel }) => (
  <section className="hero banner-2">
    <div className="hero-content">
      <h2>{title}</h2>
      <p>{description}</p>
      <NavLink to="/men-collection">
      <button>{buttonLabel}</button>
      
        </NavLink>
    </div>
  </section>
);

export default Banner;
