import { memo, useState } from 'react'

const HeartIcon = (
  <svg className="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)

  const typeText = product.type === 'exchange' ? 'Intercambio' : 'En Venta'
  const badgeClass = product.type === 'exchange' ? 'badge-exchange' : 'badge-sale'
  const priceDisplay =
    product.type === 'exchange' ? 'Intercambiar' : product.price

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        <span className={`product-badge ${badgeClass}`}>{typeText}</span>
        <button
          className="product-heart-btn"
          aria-label="Agregar a favoritos"
          onClick={(e) => {
            e.stopPropagation()
            setLiked((prev) => !prev)
          }}
          style={{
            color: liked ? '#d4183d' : 'inherit',
          }}
        >
          {HeartIcon}
        </button>
      </div>
      <div className="product-content">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-meta">
          <span className="badge badge-outline">{product.condition}</span>
          <span>{product.category}</span>
        </div>
        <div className="product-footer">
          <div>
            <div className="product-price">{priceDisplay}</div>
            <div>
              {product.location} &bull; {product.timeAgo}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductCard)
