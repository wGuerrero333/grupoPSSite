import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>
          Compra, Vende e{' '}
          <span className="highlight">Intercambia</span> Cualquier Cosa
        </h1>
        <p>
          Únete a miles de personas comprando, vendiendo e intercambiando
          artículos en tu comunidad local. Desde electrónicos hasta muebles,
          encuentra grandes ofertas o intercambia por lo que necesitas.
        </p>

        <SearchBar />

        <div className="hero-actions">
          <Link to="/" className="btn btn-primary">
            Comenzar a Explorar →
          </Link>
          <Link to="/vender" className="btn btn-outline">
            Publicar tu Artículo
          </Link>
        </div>

        <div className="hero-features">
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Comunidad Confiable</h3>
            <p>50k+ usuarios verificados intercambiando de forma segura</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🛡️</div>
            <h3>Intercambio Seguro</h3>
            <p>Protección integrada para todas las transacciones</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Rápido y Fácil</h3>
            <p>Publica artículos en minutos, encuentra ofertas al instante</p>
          </div>
        </div>
      </div>
    </section>
  )
}
