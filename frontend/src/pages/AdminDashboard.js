// src/pages/AdminDashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Admin Dashboard</h2>

      {/* Button to navigate to manage flights page */}
      <button onClick={() => navigate('/manage-flights')}>Manage Flights</button>

      {/* Button to view all bookings */}
      <button onClick={() => navigate('/admin-view-bookings')}>View All Bookings</button>

      {/* Button to manage user roles */}
      <button onClick={() => navigate('/manage-users')}>Manage Users</button>
    </div>
  );
};

export default AdminDashboard;
