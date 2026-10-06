import React from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.json'
import CoffeeCards from './CoffeeCards.jsx'

const MenuHighlights = () => {
  // Display the first 4 products as featured items
  const featuredItems = products.slice(0, 4)

  return (
    <section style={{ padding: '2rem 1rem' }}>
      <h2 style={{ marginBottom: '1rem', color: 'var(--text-h)' }}>Menu Highlights</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {featuredItems.map(item => (
          <CoffeeCards key={item.id} {...item} />
        ))}
      </div>
      <div style={{ marginTop: '1.5rem' }}>
        <Link
          to="/products"
          style={{
            textDecoration: 'none',
            padding: '0.75rem 1.5rem',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '4px',
            transition: 'background 0.3s',
          }}
        >
          View All Products
        </Link>
      </div>
    </section>
  )
}

export default MenuHighlights