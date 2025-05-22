// src/pages/LogoutPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './LogoutPage.css';  // LogoutPage-specific styles

const LogoutPage = () => {
  return (
    <div className="logout-container">
      <Navbar />
      
      <section className="content text-center p-6">
        <h2>Logout Page</h2>
        <p>You have successfully logged out!</p>
      </section>

      <Footer />
    </div>
  );
};

export default LogoutPage;
