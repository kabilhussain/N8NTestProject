import React from 'react';
import './Products.css';
import CoffeeCards from './CoffeeCards';
import products from '../data/products.json';

const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true, import: 'default' });

function Products() {
  return (
    <div className="products">
      {products.map(product => {
        const imgKey = `../assets/${product.image}`;
        const imgSrc = images[imgKey] || '';
        return (
          <CoffeeCards
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={imgSrc}
          />
        );
      })}
    </div>
  );
}

export default Products;