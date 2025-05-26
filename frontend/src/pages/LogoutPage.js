// src/pages/LogoutPage.js

import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import './LogoutPage.css';

const LogoutPage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  }, [logout, navigate]);

  return (
    <div className="logout-container">
      <Navbar />
      <section className="content text-center p-6">
        <h2>Logout Page</h2>
        <p>You have successfully logged out! Redirecting to login page...</p>
      </section>
      <Footer />
    </div>
  );
};

export default LogoutPage;
