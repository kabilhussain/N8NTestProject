import React from 'react';
import './CoffeeCards.css';

function CoffeeCards({ products }) {
  return (
    <div className="coffee-cards-container">
      {products.map((product) => {
        const imageSrc = new URL(`../assets/${product.image}`, import.meta.url).href;
        return (
          <div key={product.id} className="coffee-card">
            <img src={imageSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeCards;