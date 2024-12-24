import React from 'react';
import assets from '../assets/Assets'

const Services = () => (
  <div className="services">
    <h1>WHEN YOU BUY ONLINE</h1>
    <h3>OUR SERVICES</h3>
    <div className="icons">
      <div className="icon">
        <img className='ml-24 mb-5' src={assets.call} alt="Customer Service" />
        <p>CUSTOMER SERVICE</p>
        <p>For any question, contact info@thenoteofficial.com</p>
      </div>
      <div className="icon">
        <img className='ml-4 mb-3' src={assets.van} alt="Delivery" />
        <p>Free Complimentary Delivery</p>
      </div>
      <div className="icon">
        <img className='ml-6 mb-5' src={assets.spray} alt="Complimentary Samples" />
        <p>COMPLIMENTARY SAMPLES</p>
      </div>
      <div className="icon">
        <img className='mr-6 mb-3' src={assets.shield} alt="Secure Payment" />
        <p className='mr-10 '> SECURE PAYMENT</p>
      </div>
    </div>
  </div>
);

export default Services;
