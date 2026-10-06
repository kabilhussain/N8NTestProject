import React from 'react'
import './Products.css'
import CoffeeCards from './CoffeeCards.jsx'
import products from '../data/products.json'

const allProducts = products

function Products({ limit }) {
  const displayProducts = limit ? allProducts.slice(0, limit) : allProducts
  return (
    <section className="products">
      <h2>Products</h2>
      <div className="products-grid">
        {displayProducts.map(coffee => (
          <CoffeeCards key={coffee.id} coffee={coffee} />
        ))}
      </div>
    </section>
  )
}

export default Products