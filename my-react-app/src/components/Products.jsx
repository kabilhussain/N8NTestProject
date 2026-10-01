import React, { useState } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

const allProducts = [
  { id: 1, name: 'Espresso', description: 'A strong, full-flavored coffee.', price: 2.5, tags: ['Espresso'] },
  { id: 2, name: 'Latte', description: 'Smooth espresso with steamed milk.', price: 3.5, tags: ['Milk', 'Espresso'] },
  { id: 3, name: 'Cappuccino', description: 'Espresso, steamed milk, and foam.', price: 3.0, tags: ['Milk', 'Espresso'] },
  { id: 4, name: 'Americano', description: 'Espresso with hot water.', price: 2.75, tags: ['Espresso'] },
  { id: 5, name: 'Mocha', description: 'Chocolate, espresso, and steamed milk.', price: 4.0, tags: ['Chocolate', 'Milk', 'Espresso'] },
  // add more products as needed
]

const availableTags = ['All', 'Espresso', 'Milk', 'Chocolate']

export default function Products() {
  const [selectedTag, setSelectedTag] = useState('All')

  const filtered = selectedTag === 'All'
    ? allProducts
    : allProducts.filter(p => p.tags.includes(selectedTag))

  return (
    <div className="products-page">
      <h2>Our Coffee Selection</h2>
      <div className="products-filters">
        {availableTags.map(tag => (
          <button
            key={tag}
            className={tag === selectedTag ? 'active' : ''}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filtered.map(product => (
          <CoffeeCards
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            tags={product.tags}
          />
        ))}
      </div>
    </div>
  )
}