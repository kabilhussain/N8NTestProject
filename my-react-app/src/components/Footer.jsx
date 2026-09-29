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
      }}
    >
      © {new Date().getFullYear()} My React App
    </footer>
  )
}

export default Footer