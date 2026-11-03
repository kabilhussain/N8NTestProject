import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header
      className="header"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}
    >
      <div className="header-container">
        <Link className="logo" to="/" aria-label="Coffee House home">
          Coffee House
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link to="/">Home</Link>
          <Link to="/#menu">Menu</Link>
          <Link to="/products">Products</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/#about">About Us</Link>
        </nav>

        <div className="header-actions">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </header>
  )
}

export default Header