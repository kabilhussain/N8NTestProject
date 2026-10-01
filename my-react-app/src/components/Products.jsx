import { useState, useEffect } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('http://localhost:5000/products')
        if (!res.ok) {
          throw new Error(`Error fetching products: ${res.statusText}`)
        }
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>
  }

  return (
    <div className="products-page">
      <h2>All Offered Products</h2>
      {/* You can add filter controls here */}
      <div className="products-grid">
        {products.map((product) => (
          <CoffeeCards key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products