import React, { useState, useEffect } from 'react'
import './Products.css'
import CoffeeCards from './CoffeeCards.jsx'

const Products = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')

  useEffect(() => {
    // Fetch products from API or static file
    async function loadProducts() {
      try {
        const res = await fetch('/api/products')
        if (!res.ok) throw new Error('Network response was not ok')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Failed to load products:', err)
      }
    }
    loadProducts()
  }, [])

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = category === 'all' || p.category === category
    return matchesSearch && matchesCategory
  })

  const handleAddToInventory = (product) => {
    // TODO: implement add-to-inventory logic
    console.log('Add to inventory:', product)
  }

  return (
    <section className="products">
      <h2>All Offered Products</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All Categories</option>
          <option value="coffee">Coffee</option>
          <option value="equipment">Equipment</option>
          <option value="accessory">Accessory</option>
        </select>
      </div>
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <CoffeeCards
            key={product.id}
            product={product}
            onAdd={() => handleAddToInventory(product)}
          />
        ))}
      </div>
    </section>
  )
}

export default Products