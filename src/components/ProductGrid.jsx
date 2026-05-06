import ProductCard from './ProductCard'

export default function ProductGrid({ items, showViewAll }) {
  return (
    <>
      {showViewAll && (
        <div className="products-header">
          <h2 className="section-title">Artículos Destacados</h2>
          <a href="#" className="view-all">
            Ver Todos
          </a>
        </div>
      )}
      {!showViewAll && (
        <div className="products-header">
          <h2 className="section-title">Publicaciones Recientes</h2>
        </div>
      )}
      <div className="products-grid">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}
