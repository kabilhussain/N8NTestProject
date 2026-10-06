import React from 'react'
import './CoffeeCards.css'

function CoffeeCards({ name, description, price, image }) {
  return (
    <div className="coffee-card">
      {image && (
        <div className="coffee-card__image-wrapper">
          <img src={image} alt={name} className="coffee-card__image" />
        </div>
      )}
      <div className="coffee-card__info">
        <h3 className="coffee-card__name">{name}</h3>
        <p className="coffee-card__description">{description}</p>
        <p className="coffee-card__price">{price}</p>
      </div>
    </div>
  )
}

export default CoffeeCards