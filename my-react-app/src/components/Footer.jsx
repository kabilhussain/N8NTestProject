import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        fontSize: '50px',
        fontWeight: 'bold',
        color: 'var(--text-h)',
        textAlign: 'center',
        padding: '20px 0'
      }}
    >
      © 2023 My React App. All rights reserved.
    </footer>
  )
}