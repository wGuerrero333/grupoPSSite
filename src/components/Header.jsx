import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            GRUPO PS
          </Link>
          <nav className="nav">
            <Link to="/#browse">Explorar</Link>
            <Link to="/#categories">Categorías</Link>
            <Link to="/#how-it-works">Cómo Funciona</Link>
          </nav>
          <div className="header-actions">
            <Link to="/vender" className="btn btn-outline">
              + Publicar Artículo
            </Link>
            <Link to="/login" className="btn btn-ghost">
              👤 Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
