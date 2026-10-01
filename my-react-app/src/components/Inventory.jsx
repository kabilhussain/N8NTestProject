import React, { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './CoffeeCards.css'
import './Products.css'

function Inventory() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({ category: 'all', search: '' })

  useEffect(() => {
    // fetch or load your product list here
    // for example:
    // fetch('/api/products').then(res => res.json()).then(data => setProducts(data))
    // or load from static file / context
  }, [])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  const filteredProducts = products.filter(p => {
    const matchesCategory = filters.category === 'all' || p.category === filters.category
    const matchesSearch = p.name.toLowerCase().includes(filters.search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToInventory = (product) => {
    // your logic to add the product into inventory
  }

  return (
    <main className="inventory-page">
      <h1>Inventory</h1>
      <div className="filters">
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          value={filters.search}
          onChange={handleFilterChange}
        />
        <select name="category" value={filters.category} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="coffee">Coffee</option>
          <option value="tea">Tea</option>
          {/* add more categories as needed */}
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <CoffeeCards
            key={product.id}
            product={product}
            onAdd={() => handleAddToInventory(product)}
          />
        ))}
      </div>
    </main>
  )
}

export default Inventory