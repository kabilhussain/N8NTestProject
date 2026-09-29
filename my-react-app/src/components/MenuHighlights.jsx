import React from 'react'

const featuredItems = [
  { name: 'Cappuccino', price: '$3.50' },
  { name: 'Latte', price: '$4.00' },
  { name: 'Espresso', price: '$2.50' },
  { name: 'Cold Brew', price: '$4.50' }
]

export default function MenuHighlights() {
  return (
    <section
      id="menu-highlights"
      style={{
        padding: '32px 20px',
        textAlign: 'center'
      }}
    >
      <h2 style={{ marginBottom: '24px' }}>Menu Highlights</h2>
      <ul
        className="menu-list"
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}
      >
        {featuredItems.map(item => (
          <li
            key={item.name}
            className="menu-item"
            style={{
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '16px',
              width: '180px',
              background: 'var(--bg)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <p
              style={{
                margin: '0 0 8px',
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--text-h)'
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                margin: 0,
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--accent)'
              }}
            >
              {item.price}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}