import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
import MenuHighlights from './components/MenuHighlights.jsx'
import Products from './components/Products.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import AboutUs from './components/AboutUs.jsx'
import Inventory from './components/Inventory.jsx'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MenuHighlights />
              <Products limit={4} />
              <WhyChooseUs />
              <AboutUs />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App