import { useMemo } from 'react';
import CoffeeCards from './CoffeeCards.jsx';
import coffeeImages from '../data/coffeeImages.js';
import './Products.css';

const productDetails = [
  {
    name: 'Classic Espresso',
    description: 'Rich, bold and perfectly pulled single-origin espresso shot.',
    price: 3.5,
  },
  {
    name: 'Cappuccino',
    description: 'Espresso topped with steamed milk and a velvety foam layer.',
    price: 4.25,
  },
  {
    name: 'Caffè Latte',
    description: 'Smooth espresso blended with silky steamed milk.',
    price: 4.5,
  },
  {
    name: 'Caramel Macchiato',
    description: 'Vanilla-kissed milk, espresso and a drizzle of caramel.',
    price: 5.0,
  },
  {
    name: 'Mocha Delight',
    description: 'Espresso, chocolate and steamed milk with whipped cream.',
    price: 5.25,
  },
  {
    name: 'Cold Brew',
    description: 'Slow-steeped for 12 hours, served chilled over ice.',
    price: 4.75,
  },
  {
    name: 'Flat White',
    description: 'Double espresso with a thin layer of micro-foam.',
    price: 4.4,
  },
  {
    name: 'Americano',
    description: 'Espresso diluted with hot water for a smooth, mellow cup.',
    price: 3.75,
  },
];

function Products({ limit }) {
  const products = useMemo(() => {
    const source =
      typeof limit === 'number' && limit > 0
        ? productDetails.slice(0, limit)
        : productDetails;

    const list = [];

    for (let i = 0; i < source.length; i++) {
      const randomIndex = coffeeImages.length
        ? Math.floor(Math.random() * coffeeImages.length)
        : 0;

      list.push({
        ...source[i],
        image: coffeeImages[randomIndex],
      });
    }

    return list;
  }, [limit]);

  return (
    <section className="products-section">
      <h2 className="products-title">Our Coffee Selection</h2>
      <CoffeeCards products={products} />
    </section>
  );
}

export default Products;