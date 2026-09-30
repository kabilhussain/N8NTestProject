import React from 'react';
import './CoffeeCards.css';

const coffeeData = [
  {
    type: 'Espresso',
    name: 'Bold Espresso',
    description: 'A strong, full-bodied shot with rich crema to jumpstart your day.',
    image: 'https://source.unsplash.com/300x200/?espresso'
  },
  {
    type: 'Cappuccino',
    name: 'Classic Cappuccino',
    description: 'Smooth espresso blended with steamed milk and topped with foam.',
    image: 'https://source.unsplash.com/300x200/?cappuccino'
  },
  {
    type: 'Latte',
    name: 'Vanilla Latte',
    description: 'Creamy latte infused with vanilla syrup for a sweet twist.',
    image: 'https://source.unsplash.com/300x200/?latte'
  },
  {
    type: 'Americano',
    name: 'Hot Americano',
    description: 'Espresso diluted with hot water for a milder, larger cup.',
    image: 'https://source.unsplash.com/300x200/?americano'
  },
  {
    type: 'Mocha',
    name: 'Chocolate Mocha',
    description: 'Espresso mixed with chocolate syrup and steamed milk.',
    image: 'https://source.unsplash.com/300x200/?mocha'
  },
  {
    type: 'Macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso marked with caramel and a touch of frothy milk.',
    image: 'https://source.unsplash.com/300x200/?macchiato'
  }
];

export default function CoffeeCards() {
  return (
    <div className="coffee-cards">
      {coffeeData.map((coffee, index) => (
        <div key={index} className="coffee-card">
          <img
            src={coffee.image}
            alt={coffee.name}
            className="coffee-card-image"
          />
          <div className="coffee-card-content">
            <h3 className="coffee-card-type">{coffee.type}</h3>
            <h2 className="coffee-card-name">{coffee.name}</h2>
            <p className="coffee-card-description">{coffee.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}