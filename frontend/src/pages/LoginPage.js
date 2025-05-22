import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const LoginPage = ({ closeForm }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (!user) {
      alert('User not found. Please register first.');
    } else {
      if (user.role === 'admin') navigate('/admin');
      else navigate('/user');
    }
    closeForm(); // Close the form after login
  };

  return (
    <form onSubmit={handleLogin} className="form-container">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full border p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full border p-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2">Login</button>
    </form>
  );
};

export default LoginPage;
