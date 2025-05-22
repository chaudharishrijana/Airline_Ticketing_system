// src/pages/UserDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>User Dashboard</h2>

      {/* Button to search flights */}
      <button onClick={() => navigate('/search-flights')}>Search Flights</button>

      {/* Button to view user's bookings */}
      <button onClick={() => navigate('/booking-history')}>My Bookings</button>

      {/* Button to update user profile */}
      <button onClick={() => navigate('/profile-settings')}>Profile Settings</button>
    </div>
  );
};

export default UserDashboard;