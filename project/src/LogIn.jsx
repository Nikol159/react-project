import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Log.css'

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate= useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
    setSuccess('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
  
    try {
        const response = await fetch('http://localhost:3007/users');
      
      // Check the response status and log the response text
      console.log('Response status:', response.status);
      const responseText = await response.text();
      console.log('Response body:', responseText);
      
      const data = JSON.parse(responseText); // Parse manually to handle non-JSON responses
  
      const user = data.find((user) => user.username === username && user.password === password);
  
      if (user) {
        setSuccess('Login successful!');
        setError('');
        navigate('/main');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Server error');
    }
  };

  const handleSignUp = async () => {
    const { username, password } = formData;
  
    if (!username || !password) {
      setError('Please enter a username and password');
      return;
    }
  
    try {
      // Use full URL if you're not using a proxy
      const checkResponse = await fetch(`http://localhost:3007/users?username=${username}`);
      const existing = await checkResponse.json();
  
      if (existing.length > 0) {
        setError('Username already exists');
        return;
      }
  
      // Create a new user
      const response = await fetch('http://localhost:3007/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        const newUser = await response.json();
        setSuccess('User registered successfully!');
        setError('');
      } else {
        const errorText = await response.text();
        setError(`Failed to register user: ${errorText}`);
      }
    } catch (err) {
      console.error('Sign-up error:', err);
      setError('Server error');
    }
  };
  
  

  return (
    <div>
      <h2>Login / Sign Up</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br />
        <button id="in" type="submit">Login</button>
        <button id="up" type="button" onClick={handleSignUp} style={{ marginLeft: '10px' }}>
          Sign Up
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
      </form>
    </div>
  );
};

export default Login;
