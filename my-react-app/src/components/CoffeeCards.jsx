import './CoffeeCards.css'

function CoffeeCards({ name, price, description, image, product }) {
  const resolvedImage = image || product?.image
  const resolvedName = name || product?.name || 'Coffee'
  const resolvedPrice = price ?? product?.price
  const resolvedDescription = description || product?.description

  return (
    <div className="coffee-card">
      {resolvedImage ? (
        <img className="coffee-card-image" src={resolvedImage} alt={resolvedName} />
      ) : (
        <div className="coffee-card-image coffee-card-image-placeholder" aria-hidden="true">
          ☕
        </div>
      )}
      <div className="coffee-card-body">
        <h3 className="coffee-card-title">{resolvedName}</h3>
        {resolvedDescription && (
          <p className="coffee-card-description">{resolvedDescription}</p>
        )}
        {resolvedPrice !== undefined && resolvedPrice !== null && (
          <p className="coffee-card-price">${resolvedPrice}</p>
        )}
      </div>
    </div>
  )
}

export default CoffeeCards