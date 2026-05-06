import { useState } from 'react'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')

  const handleSearch = () => {
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="¿Qué estás buscando?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <input
        type="text"
        className="search-input"
        placeholder="Ubicación"
        style={{ maxWidth: 150, borderLeft: '1px solid var(--border)' }}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button className="search-btn" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  )
}
