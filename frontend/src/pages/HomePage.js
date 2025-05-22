import React, { useState } from 'react';
import LoginPage from './LoginPage'; // Import LoginPage
import RegisterPage from './RegisterPage'; // Import RegisterPage
import '../styles/HomePage.css'; // Import HomePage CSS

const HomePage = () => {
  const [showForm, setShowForm] = useState(null); // null = no form, 'login' = show login form, 'register' = show register form

  const handleCloseForm = () => setShowForm(null); // Close the form

  return (
    <div className="home-container">
      {!showForm ? (
        // Homepage content
        <>
          <h1 className="text-2xl font-bold">Welcome to the Airline Ticketing  System</h1>
          <p>Book your flights easily and quickly with us.</p>
        </>
      ) : (
        // Form content
        <div className="form-overlay">
          {showForm === 'login' && <LoginPage closeForm={handleCloseForm} />}
          {showForm === 'register' && <RegisterPage closeForm={handleCloseForm} />}
        </div>
      )}
    </div>
  );
};

export default HomePage;
