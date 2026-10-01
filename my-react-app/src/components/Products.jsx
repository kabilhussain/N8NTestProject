import { useState } from 'react'
import CoffeeCards from './CoffeeCards.jsx'
import { useListProductsQuery } from '../hooks/useProducts.jsx'
import './Products.css'

export default function Products() {
  const [filter, setFilter] = useState('')
  const { data: products = [] } = useListProductsQuery()
  const filtered =
    filter.trim() === ''
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase()),
        )

  return (
    <>
      <input
        type="text"
        className="products-filter"
        placeholder="Filter products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="products-container">
        <CoffeeCards products={filtered} />
      </div>
    </>
  )
}