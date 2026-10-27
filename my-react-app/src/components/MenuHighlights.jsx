const featuredCoffees = [
  {
    name: "Classic Latte",
    description: "Smooth espresso and steamed milk with a silky finish.",
    price: "$4.50",
    emoji: "☕",
  },
  {
    name: "Caramel Macchiato",
    description: "Espresso, creamy milk, and a drizzle of rich caramel.",
    price: "$5.25",
    emoji: "☕",
  },
  {
    name: "Mocha Delight",
    description: "A comforting blend of espresso, chocolate, and milk.",
    price: "$5.00",
    emoji: "☕",
  },
];

export default function MenuHighlights() {
  return (
    <section className="menu-highlights" id="menu">
      <h2>Menu Highlights</h2>
      <p>Discover a few of our favorite handcrafted coffees.</p>

      <div className="menu-grid">
        {featuredCoffees.map((coffee) => (
          <article className="product-card" key={coffee.name}>
            <span className="product-image" role="img" aria-label="Coffee cup">
              {coffee.emoji}
            </span>
            <div className="product-info">
              <h3 className="product-name">{coffee.name}</h3>
              <p className="product-description">{coffee.description}</p>
              <span className="product-price">{coffee.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}