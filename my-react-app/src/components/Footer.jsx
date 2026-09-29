import React from 'react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ padding: '20px 0' }}>
      <p
        style={{
          fontSize: '50px',
          fontWeight: 'bold',
          color: 'var(--text-h)',
          margin: 0,
        }}
      >
        © {year} My React App. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer