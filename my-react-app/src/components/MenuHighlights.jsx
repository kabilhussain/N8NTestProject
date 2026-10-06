import React from 'react'
import products from '../data/products.json'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

export default function MenuHighlights() {
  const highlights = products.slice(0, 3)

  return (
    <section className="products menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="products-grid">
        {highlights.map(product => (
          <CoffeeCards key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}