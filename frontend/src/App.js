// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import BackgroundLayout from './components/BackgroundLayout';
import PlainLayout from './components/PlainLayout';

// Pages (public)
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Dashboards
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';

// Admin features
import ManageFlights from './pages/ManageFlights';
import ManageUsers from './pages/ManageUsers';
import BookingHistory from './pages/BookingHistory'; // Admin can view all bookings

// User features
import FlightSearch from './pages/FlightSearch';
import ProfileSettings from './pages/ProfileSettings';

// Context
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public Routes with background layout */}
          <Route path="/" element={<BackgroundLayout><HomePage /></BackgroundLayout>} />
          <Route path="/login" element={<BackgroundLayout><LoginPage /></BackgroundLayout>} />
          <Route path="/register" element={<BackgroundLayout><RegisterPage /></BackgroundLayout>} />

          {/* Admin Routes inside PlainLayout (no background image) */}
          <Route path="/admin" element={<PlainLayout><AdminDashboard /></PlainLayout>} />
          <Route path="/manage-flights" element={<PlainLayout><ManageFlights /></PlainLayout>} />
          <Route path="/manage-users" element={<PlainLayout><ManageUsers /></PlainLayout>} />
          <Route path="/admin-view-bookings" element={<PlainLayout><BookingHistory /></PlainLayout>} />

          {/* User Routes inside PlainLayout */}
          <Route path="/user" element={<PlainLayout><UserDashboard /></PlainLayout>} />
          <Route path="/search-flights" element={<PlainLayout><FlightSearch /></PlainLayout>} />
          <Route path="/booking-history" element={<PlainLayout><BookingHistory /></PlainLayout>} />
          <Route path="/profile-settings" element={<PlainLayout><ProfileSettings /></PlainLayout>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
