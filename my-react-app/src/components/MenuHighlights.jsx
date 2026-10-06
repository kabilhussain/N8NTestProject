import React from 'react'
import CoffeeCards from './CoffeeCards'
import products from '../data/products.json'

const MenuHighlights = () => {
  const featuredProducts = products.filter(product => product.featured)

  return (
    <section className="menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="menu-highlights__container">
        {featuredProducts.map(({ id, name, price, image }) => {
          const imageSrc = new URL(`../assets/${image}`, import.meta.url).href
          return (
            <CoffeeCards
              key={id}
              id={id}
              name={name}
              price={price}
              image={imageSrc}
            />
          )
        })}
      </div>
    </section>
  )
}

export default MenuHighlights