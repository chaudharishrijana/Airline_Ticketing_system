// src/components/PlainLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const PlainLayout = ({ children }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff', // or any default color
      }}
    >
      <Navbar />
      <main style={{ flexGrow: 1 }} className="p-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PlainLayout;
