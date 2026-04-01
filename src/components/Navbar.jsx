import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h2>Lucas Brito</h2>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar