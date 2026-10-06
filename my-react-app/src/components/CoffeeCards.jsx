import React from 'react';
import './CoffeeCards.css';

const CoffeeCards = ({ title, description, price, image }) => {
  const imageSrc = image
    ? new URL(`../assets/${image}`, import.meta.url).href
    : null;

  return (
    <div className="coffee-card">
      {imageSrc && (
        <div className="coffee-card-image-wrapper">
          <img src={imageSrc} alt={title} className="coffee-card-image" />
        </div>
      )}
      <div className="coffee-card-content">
        <h3 className="coffee-card-title">{title}</h3>
        <p className="coffee-card-description">{description}</p>
        <p className="coffee-card-price">{price}</p>
      </div>
    </div>
  );
};

export default CoffeeCards;