import React, { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // TODO: replace with your real data‐loading logic
    // e.g. fetch('/api/products').then(res=>res.json()).then(setProducts)
    import('../data/products.json')
      .then(module => setProducts(module.default))
      .catch(err => console.error('Failed to load products:', err))
  }, [])

  return (
    <section className="products-page">
      <h2>All Products</h2>
      {/* any filter controls you already have */}
      <div className="products-grid">
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