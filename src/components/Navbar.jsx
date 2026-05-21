import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        JULIA ALVES
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/sobre">About</Link>
        <Link to="/contacto">Contact me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
