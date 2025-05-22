// src/components/BackgroundLayout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const BackgroundLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQeJ-vYt1whGF1ltIRcVfSUrqm9gaTtBP8A&s')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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

export default BackgroundLayout;
