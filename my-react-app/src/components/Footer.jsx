import React from 'react'
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="footer"
      style={{
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'var(--text-h)',
        textAlign: 'center',
        padding: '20px 0',
      }}
    >
      © {year} My React App. All rights reserved.
    </footer>
  )
}

export default Footer