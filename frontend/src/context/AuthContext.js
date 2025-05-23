import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser] = useState(null); // Not using setCurrentUser to avoid warning

  // Register function using Django backend
  const register = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        return true; // Registered successfully
      } else if (response.status === 400) {
        const data = await response.json();
        console.error('Registration error:', data);
        return false; // Email already registered or validation error
      } else {
        console.error('Unexpected response:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  // Placeholder login (can be connected to backend later)
  const login = async (email, password) => {
    console.warn('Login not implemented yet.');
    return null;
  };

  return (
    <AuthContext.Provider value={{ register, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
