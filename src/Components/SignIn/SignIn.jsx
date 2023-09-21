// src/App.js
import React, { useState } from 'react';
import './signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Implement your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleForgotPassword = () => {
    // Implement the logic to handle forgotten passwords
    console.log('Forgot Password clicked');
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className='mon'>
        <h2>Sign In</h2>
        <p>Welcome back! Kindly login to your account</p>
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input-gr">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
          <div className='gin'>
          <button onClick={handleLogin}>Login</button>
        <p className="forgot-password" onClick={handleForgotPassword}>
          <a href="#">Forgot Password?</a>
        </p>
            </div>   
       </div>
    </div>
  );
}

export default Signin;
