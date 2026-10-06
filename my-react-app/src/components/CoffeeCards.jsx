import { useState, useEffect } from 'react'
import productsData from '../data/products.json'
import './CoffeeCards.css'

export default function CoffeeCards({ products }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    // if products are passed in, use them; otherwise use full list
    setItems(products ?? productsData)
  }, [products])

  return (
    <div className="coffee-cards">
      {items.map(product => {
        const imgSrc = new URL(`../assets/${product.image}`, import.meta.url).href
        return (
          <div key={product.id} className="coffee-card">
            <img src={imgSrc} alt={product.name} className="coffee-card-image" />
            <div className="coffee-card-content">
              <h3 className="coffee-card-title">{product.name}</h3>
              <p className="coffee-card-desc">{product.description}</p>
              <p className="coffee-card-price">${product.price}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}