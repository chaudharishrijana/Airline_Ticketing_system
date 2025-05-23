import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Ensure correct import

const Navbar = () => {
  return (
    <nav className="navbar">  {/* Correct class name */}
      <div className="navbar-brand">
        <Link to="/">My Website</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
