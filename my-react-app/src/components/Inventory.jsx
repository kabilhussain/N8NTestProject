import React, { useState, useEffect } from 'react'
import './Products.css'
import CoffeeCards from './CoffeeCards.jsx'

function Inventory() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('All')
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    // load all shop products
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err))
    // load existing inventory from localStorage
    const stored = JSON.parse(localStorage.getItem('inventory') || '[]')
    setInventory(stored)
  }, [])

  const filtered = filter === 'All'
    ? products
    : products.filter((p) => p.category === filter)

  const addToInventory = (product) => {
    if (inventory.find((i) => i.id === product.id)) return
    const next = [...inventory, product]
    setInventory(next)
    localStorage.setItem('inventory', JSON.stringify(next))
  }

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  return (
    <section className="inventory">
      <h1>Shop & Add to Inventory</h1>
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === filter ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filtered.map((product) => (
          <div key={product.id} className="product-card">
            <CoffeeCards product={product} />
            <button
              className="add-button"
              aria-label={`Add ${product.name}`}
              onClick={() => addToInventory(product)}
            >
              +
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Inventory