import React from 'react';

const ProductGrid = ({ products }) => (
  <section className="product-display-section">
    <div className="product-grid">
      {products.map((product, index) => (
        <div className="product" key={index}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button className="shop-button">Add to Cart</button>
        </div>
      ))}
    </div>
  </section>
);

export default ProductGrid;
