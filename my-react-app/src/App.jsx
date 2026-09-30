import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import MenuHighlights from './components/MenuHighlights.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <header style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>
        <nav>
          <Link to="/" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            Home
          </Link>
          <Link to="/about" style={{ margin: '0 8px', textDecoration: 'none', color: 'var(--text-h)' }}>
            About Us
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
      </Routes>
    </Router>
  )
}

export default App