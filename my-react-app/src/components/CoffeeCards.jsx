import { getCoffeeImage } from "../data/coffeeImages";
import "./Products.css";

function CoffeeCards({ products = [] }) {
  if (!Array.isArray(products) || products.length === 0) {
    return null;
  }

  return (
    <div className="coffee-cards-grid">
      {products.map((product, index) => {
        const imageSrc =
          product.image || getCoffeeImage(index) || "";

        return (
          <div className="coffee-card" key={`${product.name}-${index}`}>
            {imageSrc ? (
              <img
                className="coffee-card-image"
                src={imageSrc}
                alt={product.name}
                loading="lazy"
              />
            ) : (
              <div
                className="coffee-card-image coffee-card-image-placeholder"
                aria-label={product.name}
                role="img"
              >
                <span>☕</span>
              </div>
            )}
            <div className="coffee-card-body">
              <h3 className="coffee-card-title">{product.name}</h3>
              {product.description && (
                <p className="coffee-card-description">
                  {product.description}
                </p>
              )}
              {product.price !== undefined && product.price !== null && (
                <p className="coffee-card-price">${product.price}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CoffeeCards;