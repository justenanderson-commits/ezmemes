import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <div className="nav-bar">
      <Link to="/" className="title">Memes</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/saved-memes">Saved Memes</Link>
      </nav>
    </div>
   )
}
 
export default NavBar