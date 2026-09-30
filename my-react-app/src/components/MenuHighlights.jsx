import React from 'react'
import CoffeeCards from './CoffeeCards.jsx'

const coffeeData = [
  {
    id: 1,
    type: 'Espresso',
    name: 'Classic Espresso',
    description: 'A rich and bold espresso shot with a velvety crema.',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 2,
    type: 'Cappuccino',
    name: 'Silky Cappuccino',
    description: 'Espresso topped with steamed milk and a thick layer of foam.',
    image: 'https://images.unsplash.com/photo-1511920170020-8f497e214b8b?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 3,
    type: 'Latte',
    name: 'Creamy Latte',
    description: 'Smooth blend of espresso and steamed milk, lightly topped with foam.',
    image: 'https://images.unsplash.com/photo-1524182576067-197d3b89d78c?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 4,
    type: 'Americano',
    name: 'Classic Americano',
    description: 'Espresso diluted with hot water for a clean, strong taste.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 5,
    type: 'Mocha',
    name: 'Chocolate Mocha',
    description: 'Espresso mixed with chocolate syrup and steamed milk.',
    image: 'https://images.unsplash.com/photo-1570977864202-13511c99989d?auto=format&fit=crop&w=400&q=60',
  },
  {
    id: 6,
    type: 'Macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso marked with a dash of steamed milk and caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1568667256549-0945455d2c4f?auto=format&fit=crop&w=400&q=60',
  },
]

function MenuHighlights() {
  return (
    <section
      className="menu-highlights"
      style={{ padding: '2rem 1rem', maxWidth: '1200px', margin: '0 auto' }}
    >
      <h2>Our Coffee Selection</h2>
      <CoffeeCards cards={coffeeData} />
    </section>
  )
}

export default MenuHighlights