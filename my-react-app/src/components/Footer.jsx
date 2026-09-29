import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'var(--text-h)',
        padding: '20px 0'
      }}
    >
      © 2026 N8NTestProject. All rights reserved.
    </footer>
  )
}

export default Footer