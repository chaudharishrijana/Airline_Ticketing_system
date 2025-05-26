// src/context/AuthContext.js

import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const AuthContext = createContext();

// AuthProvider component wraps the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Persist user session from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  // Register new user
  const register = async (userData) => {
    try {
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        const data = await response.json();
        // Optionally log user in immediately after register
        setCurrentUser(data);
        localStorage.setItem('currentUser', JSON.stringify(data));
        return { success: true };
      } else if (response.status === 400) {
        const data = await response.json();
        console.error('Registration error:', data);
        return { success: false, error: data };
      } else {
        console.error('Unexpected response:', response.status);
        return { success: false, error: 'Unexpected error occurred' };
      }
    } catch (error) {
      console.error('Registration failed:', error);
      return { success: false, error: 'Network error or server not responding' };
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setCurrentUser(data.user);  // user data is inside "user" key from backend
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        return { success: true };
      } else if (response.status === 401) {
        const data = await response.json();
        console.error('Login failed:', data);
        return { success: false, error: data.error || 'Invalid credentials' };
      } else {
        console.error('Unexpected response:', response.status);
        return { success: false, error: 'Unexpected error occurred' };
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Network error or server not responding' };
    }
  };

  // Logout user
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
