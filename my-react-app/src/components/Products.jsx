import React, { useState, useEffect } from 'react'
import './Products.css'

const initialProducts = [
  { id: 1, name: 'Espresso', category: 'Coffee', price: 2.5 },
  { id: 2, name: 'Cappuccino', category: 'Coffee', price: 3.5 },
  { id: 3, name: 'Latte', category: 'Coffee', price: 3.0 },
  { id: 4, name: 'Mocha', category: 'Coffee', price: 3.75 },
  { id: 5, name: 'Americano', category: 'Coffee', price: 2.75 },
  { id: 6, name: 'Croissant', category: 'Pastry', price: 2.0 },
  { id: 7, name: 'Muffin', category: 'Pastry', price: 2.5 },
  { id: 8, name: 'Bagel', category: 'Bakery', price: 1.5 },
  { id: 9, name: 'Tea', category: 'Beverage', price: 2.0 },
  { id: 10, name: 'Hot Chocolate', category: 'Beverage', price: 2.75 }
]

function Products() {
  const [products] = useState(initialProducts)
  const [filteredProducts, setFilteredProducts] = useState(initialProducts)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(initialProducts.map(p => p.category)))]

  useEffect(() => {
    let result = products
    if (search.trim() !== '') {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.trim().toLowerCase())
      )
    }
    if (category !== 'All') {
      result = result.filter(p => p.category === category)
    }
    setFilteredProducts(result)
  }, [search, category, products])

  const handleAdd = product => {
    const existing = JSON.parse(localStorage.getItem('inventory')) || []
    if (!existing.find(item => item.id === product.id)) {
      localStorage.setItem(
        'inventory',
        JSON.stringify([...existing, product])
      )
      // optionally give feedback
    }
  }

  return (
    <div className="products-container">
      <h2>All Products</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
              <button
                className="add-btn"
                aria-label={`Add ${product.name} to inventory`}
                onClick={() => handleAdd(product)}
              >
                +
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No products found</p>
        )}
      </div>
    </div>
  )
}

export default Products