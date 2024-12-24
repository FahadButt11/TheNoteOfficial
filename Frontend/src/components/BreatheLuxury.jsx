import React from 'react';
import Assets from '../assets/Assets';
import { NavLink } from 'react-router-dom';



const BreatheLuxury = () => (
  <div className="breathe-luxury">
    <div className="our-story">
      <img src={Assets.typewriter} alt="breathe-luxury" />
    </div>
    <div className="text">
      <h1>BREATHE LUXURY</h1>
      <p>
        At "THE NOTE." our journey begins with a simple yet profound belief: Life is a symphony of moments, and each moment carries its unique note...
      </p>
      <NavLink to='/about'>
      <button className="discover-button">Discover More</button>

      </NavLink>
    </div>
  </div>
);

export default BreatheLuxury;
