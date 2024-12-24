import React from 'react';
import Assets from "../assets/Assets";
import {NavLink} from 'react-router-dom';

const ProductGrid = ({ products }) => (
  <section className="product-display-section">
    <div className="product-grid">
      <div className="product">
        <img src={Assets.dusk1} alt="" />
        <h3>DUSK</h3>
        <p>Rs 4299</p>
        <NavLink to="/men-collection">
        <button className='shop-button'>Shop Now</button>
        </NavLink>
      </div>
      <div className="product">
        <img src={Assets.intenso1} alt="" />
        <h3>Intenso</h3>
        <p>Rs 4199</p>
        <NavLink to="/men-collection">
        <button className='shop-button'>Shop Now</button>
        </NavLink>
      </div>
      <div className="product">
        <img src={Assets.neroli1} alt="" />
        <h3>Neroli</h3>
        <p>Rs 4099</p>
        <NavLink to="/men-collection">
        <button className='shop-button'>Shop Now</button>
        </NavLink>
      </div>
      <div className="product">
        <img src={Assets.woods1} alt="" />
        <h3>Woods</h3>
        <p>Rs 3899</p>
        <NavLink to="/men-collection">
        <button className='shop-button'>Shop Now</button>
        </NavLink>
      </div>
    </div>
  </section>
);

export default ProductGrid;
