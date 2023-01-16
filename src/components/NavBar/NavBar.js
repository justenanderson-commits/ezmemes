import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/" className="title">
        EZMemes
      </Link>
      <nav className="nav">
        <Link data-cy="home" to="/">
          Home
        </Link>
        <Link data-cy="my-memes" to="/my-memes">
          My Memes
        </Link>
      </nav>
    </div>
  )
}

export default NavBar
