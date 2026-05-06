import { categories } from '../data/categories'

export default function Categories() {
  return (
    <section className="section section-muted" id="categories">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Explorar por Categoría</h2>
          <p className="section-description">
            Descubre artículos en las categorías que más te interesan
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat) => (
            <a href="#" className="category-card" key={cat.id}>
              <div
                className="category-icon"
                style={{ backgroundColor: cat.bg, color: cat.color }}
              >
                {cat.icon}
              </div>
              <div className="category-info">
                <h3>{cat.name}</h3>
                <p className="category-count">{cat.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
