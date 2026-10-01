import { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

export default function Products() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err))
  }, [])

  const categories = ['All', ...new Set(products.map((p) => p.category))]

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleAddToInventory = (product) => {
    // Add to inventory logic (e.g., POST to /inventory)
    fetch('http://localhost:3000/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    }).catch((err) => console.error('Failed to add to inventory:', err))
  }

  return (
    <section className="products">
      <h2>Our Products</h2>
      <div className="products-filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
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