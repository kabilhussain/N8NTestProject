import React from 'react'
import './CoffeeCards.css'

const CoffeeCards = ({ items = [], onAdd }) => {
  return (
    <div className="coffee-card">
      {items.map(item => (
        <div key={item.id} className="coffee-card__item">
          {item.image && (
            <img
              src={item.image}
              alt={item.name}
              className="coffee-card__image"
            />
          )}
          <h3 className="coffee-card__name">{item.name}</h3>
          {item.description && (
            <p className="coffee-card__description">{item.description}</p>
          )}
          <div className="coffee-card__footer">
            <span className="coffee-card__price">
              ${item.price != null ? item.price.toFixed(2) : ''}
            </span>
            <button
              type="button"
              className="coffee-card__add-button"
              onClick={() => onAdd(item)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CoffeeCards