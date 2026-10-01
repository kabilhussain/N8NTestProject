import React, { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="products">
      <div className="products-grid">
        {products.map(product => (
          <CoffeeCards key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default Products