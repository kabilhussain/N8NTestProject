import React, { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards'
import './Products.css'

export default function Inventory() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // fetch all offered products
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (!products.length) {
    return <p>No products available.</p>
  }

  return (
    <section className="inventory">
      <h2>Available Products</h2>
      {/* filters component could go here if needed */}
      <div className="products-grid">
        {products.map(product => (
          <CoffeeCards
            key={product.id}
            product={product}
            onAdd={() => {
              // handle add-to-inventory action
              // e.g. call API or update state
            }}
          />
        ))}
      </div>
    </section>
  )
}