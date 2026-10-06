import React from 'react';
import products from '../data/products.json';
import CoffeeCards from './CoffeeCards';
import './Products.css';

function Products() {
  return (
    <div className="products">
      {products.map(({ id, name, description, price, image }) => {
        const imageSrc = new URL(`../assets/${image}`, import.meta.url).href;
        return (
          <CoffeeCards
            key={id}
            name={name}
            description={description}
            price={price}
            image={imageSrc}
          />
        );
      })}
    </div>
  );
}

export default Products;