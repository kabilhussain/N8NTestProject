import React from 'react';
import products from '../data/products.json';
import CoffeeCards from './CoffeeCards';

const MenuHighlights = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="highlights-container">
        {featuredProducts.map(product => (
          <CoffeeCards
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            image={new URL(`../assets/${product.image}`, import.meta.url).href}
          />
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;