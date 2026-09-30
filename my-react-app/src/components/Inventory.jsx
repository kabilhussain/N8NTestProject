import React, { useState } from 'react'

export default function Inventory() {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const products = [
    { id: 1, name: 'Espresso', quantity: 2 },
    { id: 2, name: 'Latte', quantity: 1 },
    { id: 3, name: 'Cappuccino', quantity: 3 },
  ]

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    maxWidth: '400px',
    margin: '16px auto',
  }

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 12px',
    borderBottom: '1px solid var(--border)',
  }

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    background: 'var(--accent)',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '16px',
  }

  return (
    <div style={{ padding: '24px', textAlign: 'center' }}>
      {!orderPlaced ? (
        <>
          <h2>Your Inventory</h2>
          <ul style={listStyle}>
            {products.map((prod) => (
              <li key={prod.id} style={itemStyle}>
                <span>{prod.name}</span>
                <span>Qty: {prod.quantity}</span>
              </li>
            ))}
          </ul>
          <button style={buttonStyle} onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      ) : (
        <>
          <h2>Order Getting Prepared</h2>
          <ul style={listStyle}>
            {products.map((prod) => (
              <li key={prod.id} style={itemStyle}>
                <span>
                  {prod.name} x {prod.quantity}
                </span>
                <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>
                  In Progress
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}