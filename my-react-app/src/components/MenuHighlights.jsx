import React from 'react'

export default function MenuHighlights() {
  const items = [
    { name: 'Caramel Latte', price: '$5.00' },
    { name: 'Vanilla Cold Brew', price: '$4.50' },
    { name: 'Mocha Frappé', price: '$5.50' },
    { name: 'Hazelnut Cappuccino', price: '$5.25' },
  ]

  return (
    <section
      className="menu-highlights"
      style={{ padding: '40px 20px' }}
    >
      <h2>Menu Highlights</h2>
      <div
        className="menu-grid"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '24px',
        }}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="menu-item"
            style={{
              maxWidth: '200px',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: '20px',
                margin: '0 0 8px',
                color: 'var(--text-h)',
              }}
            >
              {item.name}
            </h3>
            <p
              style={{
                fontSize: '18px',
                margin: 0,
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