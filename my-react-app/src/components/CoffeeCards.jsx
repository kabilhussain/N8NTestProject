import { coffeeImages, getImageForIndex } from "../data/coffeeImages";
import "./CoffeeCards.css";

const CoffeeCards = ({ products = [] }) => {
  // Assign images to products using a for loop with getImageForIndex
  const productsWithImages = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const image =
      product.image ||
      getImageForIndex(i) ||
      (coffeeImages && coffeeImages.length
        ? coffeeImages[i % coffeeImages.length]
        : "");
    productsWithImages.push({ ...product, image });
  }

  if (!productsWithImages.length) {
    return null;
  }

  return (
    <div className="coffee-cards">
      {productsWithImages.map((product, index) => (
        <div className="coffee-card" key={product.id ?? index}>
          <div className="coffee-card__image-wrapper">
            {product.image ? (
              <img
                className="coffee-card__image"
                src={product.image}
                alt={product.name || "Coffee"}
                loading="lazy"
              />
            ) : (
              <div className="coffee-card__image coffee-card__image--placeholder" />
            )}
          </div>
          <div className="coffee-card__body">
            <h3 className="coffee-card__title">{product.name}</h3>
            {product.description && (
              <p className="coffee-card__description">{product.description}</p>
            )}
            {product.price != null && (
              <p className="coffee-card__price">${product.price}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CoffeeCards;