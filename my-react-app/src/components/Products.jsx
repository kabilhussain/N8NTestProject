import { useMemo } from 'react'
import products from '../data/products.json'
import coffeeImages from '../data/coffeeImages.js'
import CoffeeCards from './CoffeeCards.jsx'
import './Products.css'

function Products({ limit }) {
  const productsWithImages = useMemo(() => {
    const source = limit ? products.slice(0, limit) : products
    const result = []

    for (let i = 0; i < source.length; i++) {
      const randomIndex = Math.floor(Math.random() * coffeeImages.length)
      result.push({
        ...source[i],
        image: coffeeImages[randomIndex],
      })
    }

    return result
  }, [limit])

  return (
    <section className="products">
      <h2>Our Coffee Products</h2>
      <CoffeeCards products={productsWithImages} />
    </section>
  )
}

export default Products