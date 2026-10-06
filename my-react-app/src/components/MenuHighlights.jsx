import React from "react";
import products from "../data/products.json";
import CoffeeCards from "./CoffeeCards";
import "./Products.css";

const MenuHighlights = () => {
  // take the first three products as highlights
  const highlights = products.slice(0, 3);

  return (
    <section className="products menu-highlights">
      <h2>Menu Highlights</h2>
      <div className="products-container">
        {highlights.map((product) => (
          <CoffeeCards key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default MenuHighlights;