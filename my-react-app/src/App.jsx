import { Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import MenuHighlights from './components/MenuHighlights.jsx'
import Inventory from './components/Inventory.jsx'
import Products from './components/Products.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <header style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <nav>
          <Link to="/" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            About Us
          </Link>
          <Link to="/inventory" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            Inventory
          </Link>
          <Link to="/products" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            Products
          </Link>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyChooseUs />
              <MenuHighlights />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/inventory"
          element={
            <>
              <Inventory />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Products />
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  )
}

export default App