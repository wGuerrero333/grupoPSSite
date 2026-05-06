import { products } from '../data/products'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import ProductGrid from '../components/ProductGrid'
import HowItWorks from '../components/HowItWorks'

export default function HomePage() {
  const featured = products.slice(0, 4)
  const recent = products.slice(4)

  return (
    <>
      <Hero />
      <Categories />
      <section className="section">
        <div className="container">
          <ProductGrid items={featured} showViewAll />
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <ProductGrid items={recent} />
        </div>
      </section>
      <HowItWorks />
    </>
  )
}
