import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
      <div className="footer-info">
        <p>&copy; {new Date().getFullYear()} Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer