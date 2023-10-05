import React, { useState } from 'react';
import './Feedback.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function Feedback() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, feedback } = formData;
    let currentErrors = {
      name: '',
      email: '',
      feedback: ''
    };
    let isValid = true;

    if (!name.trim()) {
      currentErrors.name = 'Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      currentErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      currentErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!feedback.trim()) {
      currentErrors.feedback = 'Feedback is required';
      isValid = false;
    }

    setErrors(currentErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form data submitted:', formData);

      // Optionally, reset the form
      setFormData({
        name: '',
        email: '',
        feedback: ''
      });

      setErrors({
        name: '',
        email: '',
        feedback: ''
      });

      setSubmitted(true);
    }
  };

  const { name, email, feedback } = formData;

  return (
    
    <div className="feedback-form">
    
      <div className="rectangle">
        <div className="he
        ading">FEEDBACK FORM</div>
      </div><br/><br/><br/><br/>
      <h2>
      <Link to='/que'><div className="continue-btn">Back</div></Link></h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name"><div className='t'>Name:</div></label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.name}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email"><div className='t'>Email:</div></label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="feedback"><div className='t'>Feedback:</div></label>
          <textarea
            name="feedback"
            id="feedback"
            value={feedback}
            onChange={handleChange}
            required
          />
          <span className="error">{errors.feedback}</span>
        </div>
        <button type="submit" ><div className='bu'>Submit</div></button>
      </form>
      {submitted && 
        <div className="confirmation-message">
          Thank you for your feedback! Form submitted successfully.
        </div>
      }
    </div>
  );
}

export default Feedback;
