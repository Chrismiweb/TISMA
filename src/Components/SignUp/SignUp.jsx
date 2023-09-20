import React, { useState } from 'react';
import './signup.css'

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <h2>Create  Account</h2>
      <p>Welcome to Tisma, Kindly create an account</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <input
            type="text" placeholder='e.g Ismail john'
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email" placeholder='toashbaba@yahoo.com'
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password" placeholder='******************'
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="Confirm Password"> Confirm Password</label>
          <input
            type="Confirm Passoword" placeholder='******************'
            id="Confirm Password"
            name="Confirm Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p>By clicking sign up means, you to our <a href="">terms of service</a></p>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
