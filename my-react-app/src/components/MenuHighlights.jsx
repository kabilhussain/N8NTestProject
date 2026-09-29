import React from 'react'

const featuredItems = [
  { name: 'Cappuccino', price: '$4.50' },
  { name: 'Caramel Latte', price: '$5.00' },
  { name: 'Espresso Shot', price: '$3.00' },
  { name: 'Vanilla Cold Brew', price: '$4.75' },
]

export default function MenuHighlights() {
  return (
    <section
      className="menu-highlights"
      style={{
        padding: '60px 20px',
        background: 'var(--accent-bg)',
        textAlign: 'center',
      }}
    >
      <h2 style={{ color: 'var(--text-h)', marginBottom: '16px' }}>
        Our Favorites
      </h2>
      <p style={{ color: 'var(--text)', maxWidth: '600px', margin: '0 auto 32px' }}>
        Hand-selected specials we think you'll love. Warm up or cool down with these
        crowd-pleasers.
      </p>
      <div
        className="menu-items"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
        }}
      >
        {featuredItems.map((item) => (
          <div
            key={item.name}
            className="menu-item"
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              padding: '24px',
              width: '200px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <h3
              style={{
                margin: '0 0 8px',
                fontSize: '20px',
                color: 'var(--text-h)',
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                margin: 0,
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--accent)',
              }}
            >
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}