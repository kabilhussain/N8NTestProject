import { useMemo } from 'react';
import products from '../data/products.json';
import CoffeeCards from './CoffeeCards';
import './Products.css';

// Directly import every image from the assets folder (Vite feature).
// This guarantees the images are bundled and visible on both pages.
const imageModules = import.meta.glob(
  '../assets/*.{png,jpg,jpeg,webp,svg,gif}',
  { eager: true }
);

const allImages = Object.values(imageModules)
  .map((mod) => mod.default || mod)
  .filter(Boolean);

// Pick `count` random images from the pool using a for loop.
function pickRandomImages(count) {
  const picked = [];
  if (allImages.length === 0) return picked;

  const pool = [...allImages];
  for (let i = 0; i < count; i++) {
    if (pool.length === 0) {
      // Refill the pool so we can keep going if there are more products than images.
      pool.push(...allImages);
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(randomIndex, 1)[0]);
  }
  return picked;
}

export default function Products({ limit }) {
  const productList = useMemo(() => {
    const base = limit ? products.slice(0, limit) : products;
    const randomImages = pickRandomImages(base.length);

    const list = [];
    for (let i = 0; i < base.length; i++) {
      list.push({
        ...base[i],
        image: randomImages[i] || base[i].image,
      });
    }
    return list;
  }, [limit]);

  return (
    <section className="products">
      <h2 className="products__title">Our Coffee</h2>
      <div className="products__grid">
        {productList.map((product) => (
          <CoffeeCards key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}