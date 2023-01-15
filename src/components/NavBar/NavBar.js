import './NavBar.scss'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <div className="nav-bar">
      <Link to="/" className="title">EZMemes</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/my-memes">My Memes</Link>
      </nav>
    </div>
   )
}
 
export default NavBar