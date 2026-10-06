import React from 'react'
import './CoffeeCards.css'

function CoffeeCards({ coffee }) {
  return (
    <div className="coffee-card">
      <img src={coffee.image} alt={coffee.name} className="coffee-image" />
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div className="coffee-price">
        <span>${coffee.price}</span>
      </div>
    </div>
  )
}

export default CoffeeCards