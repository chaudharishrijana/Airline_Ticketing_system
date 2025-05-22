import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const RegisterPage = ({ closeForm }) => {
  const { register } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', role: 'user',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = register(formData);
    if (success) {
      alert('Registered successfully!');
      navigate('/login');
    } else {
      alert('Email already registered!');
    }
    closeForm(); // Close the form after registration
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input name="firstName" onChange={handleChange} placeholder="First Name" required className="w-full border p-2" />
      <input name="lastName" onChange={handleChange} placeholder="Last Name" required className="w-full border p-2" />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required className="w-full border p-2" />
      <input name="phone" onChange={handleChange} placeholder="Phone Number" required className="w-full border p-2" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" required className="w-full border p-2" />
      <select name="role" onChange={handleChange} className="w-full border p-2">
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
};

export default RegisterPage;
