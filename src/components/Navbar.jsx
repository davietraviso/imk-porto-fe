import React from 'react';
import { Link } from 'react-router-dom';
import '../sections/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyPorto</div>
      <ul className="navbar-links">
        <li><Link to="/">Beranda</Link></li>
        {/* <li><Link to="/projects">Proyek</Link></li> */}
        <li><Link to="/articles">Artikel</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
        {/* <li><Link to="/admin">Admin</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
