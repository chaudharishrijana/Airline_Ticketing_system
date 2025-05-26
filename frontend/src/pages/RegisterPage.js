import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const RegisterPage = ({ openLoginForm }) => {  // renamed closeForm to openLoginForm for clarity
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await register(formData);

    if (result.success) {
      setMessage('Registered successfully! Redirecting to login...');
      setTimeout(() => {
        setMessage('');
        if (openLoginForm) openLoginForm();  // open the login form popup or navigate
        else navigate('/login'); // fallback if no prop passed
      }, 2000);
    } else {
      setMessage('Registration failed: ' + (result.error ? JSON.stringify(result.error) : 'Unknown error'));
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="text-xl font-bold mb-4">Register</h2>

      <input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        placeholder="First Name"
        required
        className="w-full border p-2 mb-2"
      />

      <input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        placeholder="Last Name"
        required
        className="w-full border p-2 mb-2"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="w-full border p-2 mb-2"
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        required
        className="w-full border p-2 mb-2"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="w-full border p-2 mb-2"
      />

      <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border p-2 mb-4"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Register
      </button>

      {/* Popup message */}
      {message && (
        <div className="mt-4 p-2 bg-green-200 text-green-800 rounded">
          {message}
        </div>
      )}
    </form>
  );
};

export default RegisterPage;
