// src/pages/ManageFlights.js

import React, { useState } from 'react';

const ManageFlights = () => {
  const [flights, setFlights] = useState([]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Manage Flights</h2>
      {/* List flights and provide options to add/edit/delete (dummy UI for now) */}
      <p>Flight management features will go here.</p>
    </div>
  );
};

export default ManageFlights;