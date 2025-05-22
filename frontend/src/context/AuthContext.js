import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const register = (userData) => {
    const exists = users.find((u) => u.email === userData.email);
    if (exists) return false;
    setUsers([...users, userData]);
    return true;
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) return null;
    setCurrentUser(user);
    return user;
  };

  return (
    <AuthContext.Provider value={{ register, login, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
