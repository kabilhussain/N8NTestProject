import React from 'react';
import './CoffeeCards.css';

export default function CoffeeCards({ name, description, price, image }) {
  // Dynamically resolve the image path from the src/assets folder
  const imageSrc = new URL(`../assets/${image}`, import.meta.url).href;

  return (
    <div className="coffee-card">
      <img src={imageSrc} alt={name} className="coffee-card-image" />
      <div className="coffee-card-details">
        <h3 className="coffee-card-title">{name}</h3>
        <p className="coffee-card-description">{description}</p>
        <span className="coffee-card-price">{price}</span>
      </div>
    </div>
  );
}