import React from "react";

const featuredCoffees = [
  {
    name: "Caramel Cloud Latte",
    description: "Smooth espresso, velvety steamed milk, and a touch of caramel.",
    price: "$5.25",
    icon: "☕",
  },
  {
    name: "Classic Cappuccino",
    description: "Rich espresso topped with creamy milk foam and cocoa.",
    price: "$4.75",
    icon: "🥛",
  },
  {
    name: "Honey Oat Cold Brew",
    description: "Slow-steeped coffee with oat milk and a hint of honey.",
    price: "$5.50",
    icon: "🧋",
  },
];

function MenuHighlights() {
  return (
    <section className="menu-highlights products-section" id="menu">
      <div className="section-heading">
        <h2>Menu Highlights</h2>
        <p>
          Find your new favorite in our selection of handcrafted coffee,
          thoughtfully brewed with the finest beans.
        </p>
      </div>

      <div className="products-grid">
        {featuredCoffees.map((coffee) => (
          <article className="product-card" key={coffee.name}>
            <div className="product-image" aria-hidden="true">
              <span>{coffee.icon}</span>
            </div>
            <div className="product-info">
              <h3 className="product-name">{coffee.name}</h3>
              <p className="product-description">{coffee.description}</p>
              <p className="product-price">{coffee.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default MenuHighlights;