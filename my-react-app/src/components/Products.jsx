import React, { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')

  useEffect(() => {
    // Replace this with real fetch if needed
    const initialProducts = [
      { id: 1, name: 'Espresso', description: 'Strong and bold', price: '$3.00', image: '/images/espresso.jpg', category: 'espresso' },
      { id: 2, name: 'Latte', description: 'Smooth and creamy', price: '$4.50', image: '/images/latte.jpg', category: 'latte' },
      { id: 3, name: 'Cappuccino', description: 'Frothy and delightful', price: '$4.00', image: '/images/cappuccino.jpg', category: 'espresso' },
      { id: 4, name: 'Cold Brew', description: 'Chilled and refreshing', price: '$4.25', image: '/images/coldbrew.jpg', category: 'coldbrew' },
      // ...more products
    ]
    setProducts(initialProducts)
  }, [])

  const filtered = products
    .filter(p => (categoryFilter === 'all' || p.category === categoryFilter))
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <section>
      <h2>Our Coffees</h2>
      <div className="products-filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="espresso">Espresso</option>
          <option value="latte">Latte</option>
          <option value="coldbrew">Cold Brew</option>
        </select>
      </div>
      <div className="products-grid">
        {filtered.map(product => (
          <CoffeeCards key={product.id} coffee={product} />
        ))}
      </div>
    </section>
  )
}

export default Products