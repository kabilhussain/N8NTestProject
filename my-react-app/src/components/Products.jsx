import React, { useState } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

const PRODUCTS = [
  { id: 1, name: 'Espresso', category: 'espresso', price: 2.5 },
  { id: 2, name: 'Latte', category: 'latte', price: 3.2 },
  { id: 3, name: 'Cappuccino', category: 'cappuccino', price: 3.0 },
  { id: 4, name: 'Americano', category: 'americano', price: 2.0 },
  { id: 5, name: 'Mocha', category: 'mocha', price: 3.5 },
  { id: 6, name: 'Flat White', category: 'latte', price: 3.0 },
]

const CATEGORIES = ['all', 'espresso', 'latte', 'cappuccino', 'americano', 'mocha']

export default function Products() {
  const [filter, setFilter] = useState('all')

  const filteredProducts =
    filter === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter)

  const handleAdd = (product) => {
    // implement adding to inventory (e.g. via context or callback)
    console.log(`Add to inventory:`, product)
  }

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <CoffeeCards
            key={product.id}
            product={product}
            onAdd={() => handleAdd(product)}
          />
        ))}
      </div>
    </div>
  )
}