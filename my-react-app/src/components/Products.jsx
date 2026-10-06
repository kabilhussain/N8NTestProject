import React from 'react'
import products from '../data/products.json'
import CoffeeCards from './CoffeeCards'
import './Products.css'

function Products() {
  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="products-container">
        {products.map(product => (
          <CoffeeCards
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  )
}

export default Products