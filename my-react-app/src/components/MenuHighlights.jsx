import products from "../data/products.json";
import "./Products.css";

const featuredProducts = Array.isArray(products) ? products.slice(0, 3) : [];

function MenuHighlights() {
  return (
    <section className="menu-highlights" aria-labelledby="menu-highlights-title">
      <header
        className="menu-highlights__header"
        style={{ textAlign: "center", margin: "0 auto 2rem", maxWidth: "700px" }}
      >
        <h2 id="menu-highlights-title">Menu Highlights</h2>
        <p>
          Discover a few of our favorite coffees, roasted and prepared with care
          for every kind of coffee moment.
        </p>
      </header>

      {featuredProducts.length > 0 && (
        <div className="products-grid" aria-label="Featured coffee products">
          {featuredProducts.map((product, index) => {
            const image =
              product.image || product.imageUrl || product.photo || product.src;
            const name = product.name || product.title || "Featured Coffee";
            const description =
              product.description || product.details || "Made fresh with carefully selected coffee beans.";
            const price = product.price;

            return (
              <article
                className="product-card"
                key={product.id ?? product.slug ?? name ?? index}
              >
                {image ? (
                  <img
                    className="product-image"
                    src={image}
                    alt={product.imageAlt || name}
                    loading="lazy"
                  />
                ) : (
                  <div className="product-image" role="img" aria-label={name}>
                    <span aria-hidden="true">☕</span>
                  </div>
                )}
                <div className="product-info">
                  <h3 className="product-name">{name}</h3>
                  <p className="product-description">{description}</p>
                  {price != null && (
                    <p className="product-price">
                      {typeof price === "number" ? `$${price.toFixed(2)}` : price}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default MenuHighlights;