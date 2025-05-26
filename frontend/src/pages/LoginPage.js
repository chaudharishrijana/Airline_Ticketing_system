import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Form.css';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'error' or 'success'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    const result = await login(email, password);

    if (!result.success) {
      setMessage(result.error || 'User not found or wrong credentials!');
      setMessageType('error');
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 2000);
    } else {
      setMessage('Login successful! Redirecting...');
      setMessageType('success');
      setTimeout(() => {
        setMessage('');
        setMessageType('');
        // Redirect based on user role
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user?.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/user');
        }
      }, 2000);
    }
    setLoading(false);
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
        className="w-full border p-2 mb-2"
        disabled={loading}
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="w-full border p-2 mb-2"
        disabled={loading}
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      {/* Popup message */}
      {message && (
        <div
          className={`mt-4 p-2 rounded ${
            messageType === 'success' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {message}
        </div>
      )}
    </form>
  );
};

export default LoginPage;
