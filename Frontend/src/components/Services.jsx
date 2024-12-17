import React from 'react';
import assets from '../assets/Assets'

const Services = () => (
  <div className="services">
    <h1>WHEN YOU BUY ONLINE</h1>
    <h3>OUR SERVICES</h3>
    <div className="icons">
      <div className="icon">
        <img src={assets.call} alt="Customer Service" />
        <p>CUSTOMER SERVICE</p>
        <p>For any question, contact info@thenoteofficial.com</p>
      </div>
      <div className="icon">
        <img src={assets.van} alt="Delivery" />
        <p>Free Complimentary Delivery</p>
      </div>
      <div className="icon">
        <img src={assets.spray} alt="Complimentary Samples" />
        <p>COMPLIMENTARY SAMPLES</p>
      </div>
      <div className="icon">
        <img src={assets.shield} alt="Secure Payment" />
        <p>SECURE PAYMENT</p>
      </div>
    </div>
  </div>
);

export default Services;
