import React from 'react'

function Inventory() {
  const products = [
    { id: 1, name: 'Espresso Beans', quantity: 2, price: 12.99 },
    { id: 2, name: 'Colombian Roast', quantity: 1, price: 15.49 },
    { id: 3, name: 'French Press', quantity: 1, price: 29.99 }
  ]

  const handlePlaceOrder = () => {
    alert('Your order has been placed!')
  }

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid var(--border)'
  }

  const containerStyle = {
    maxWidth: '600px',
    margin: '32px auto',
    padding: '0 16px',
    textAlign: 'left'
  }

  const buttonStyle = {
    marginTop: '24px',
    padding: '10px 20px',
    background: 'var(--accent)',
    color: 'var(--bg)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px'
  }

  return (
    <div style={containerStyle}>
      <h1>Inventory</h1>
      <ul style={listStyle}>
        {products.map(product => (
          <li key={product.id} style={itemStyle}>
            <span>
              {product.name} &times; {product.quantity}
            </span>
            <span>${(product.price * product.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <button style={buttonStyle} onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  )
}

export default Inventory