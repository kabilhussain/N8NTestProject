import React from 'react';
import './CoffeeCards.css';

const CoffeeCards = ({ products }) => (
  <div className="coffee-cards">
    {products.map((product) => {
      // Resolve image path from src/assets via Vite
      const imageSrc = new URL(`../assets/${product.image}`, import.meta.url).href;
      return (
        <div className="coffee-card" key={product.id}>
          <img
            src={imageSrc}
            alt={product.name}
            className="coffee-card-image"
          />
          <div className="coffee-card-content">
            <h3 className="coffee-card-title">{product.name}</h3>
            <p className="coffee-card-description">{product.description}</p>
            <span className="coffee-card-price">${product.price}</span>
          </div>
        </div>
      );
    })}
  </div>
);

export default CoffeeCards;