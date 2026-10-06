import React from 'react'
import './Products.css'
import CoffeeCards from './CoffeeCards.jsx'
import products from '../data/products.json'

function Products({ limit, featured }) {
  let displayProducts = products

  if (featured) {
    displayProducts = displayProducts.filter(product => product.featured)
  }

  if (typeof limit === 'number') {
    displayProducts = displayProducts.slice(0, limit)
  }

  return (
    <section className="products">
      <h2>{featured ? 'Featured Products' : 'Products'}</h2>
      <div className="products-grid">
        {displayProducts.map(coffee => (
          <CoffeeCards key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  )
}

export default Products