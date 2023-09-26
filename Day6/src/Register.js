import React, { useState } from 'react';
import './Register.css'; // Import your CSS file
import { BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegister = () => {
    // Reset errors
    setErrors({
      name: '',
      email: '',
      phone: '',
    });

    // You can add your registration logic here
    if (!formData.name) {
      setErrors({ ...errors, name: 'Name is required.' });
    }

    if (!formData.email) {
      setErrors({ ...errors, email: 'Email is required.' });
    } else if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format.' });
    }

    if (!formData.phone) {
      setErrors({ ...errors, phone: 'Phone number is required.' });
    } else if (!isValidPhone(formData.phone)) {
      setErrors({ ...errors, phone: 'Invalid phone number format.' });
    }

    // If there are no errors, proceed with registration
    if (!errors.name && !errors.email && !errors.phone) {
      console.log('Name:', formData.name);
      console.log('Email Address:', formData.email);
      console.log('Phone Number:', formData.phone);
    }
  };

  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // For a basic example, you can use a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isValidPhone = (phone) => {
    // Implement your phone number validation logic here
    // For a basic example, you can use a regular expression
    const phonePattern = /^\d{10}$/; // Assuming 10-digit phone numbers
    return phonePattern.test(phone);
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        <button type="button" className="submit-button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
