import React, { useState } from 'react';
import './Login.css'; // Import the CSS file
import { BrowserRouter, Routes, Route, Redirect, Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // You can add your advanced login logic here
    if (!username || !password) {
      setError('Username and password are required.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
    } else {
      // Perform your login logic here
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login;