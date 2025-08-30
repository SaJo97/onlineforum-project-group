import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="navbar-header">
      <h1><Link to="/">Online Forum</Link></h1>
      <Link to="/createThread">
        <button className="navbar-btn">Skapa Tråd</button>
      </Link>
    </nav>
  )
}
export default Navbar