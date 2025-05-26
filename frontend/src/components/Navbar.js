import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');  // Redirect to login after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">My Website</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>

        {currentUser ? (
          <>
            {/* Optionally display user info */}
            <span className="navbar-user">Hello, {currentUser.first_name || currentUser.email}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
