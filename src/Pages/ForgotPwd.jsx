import React, { useState } from 'react';
import "./ForgotPwd.css";
import { forgotPwd } from '../crud.jsx';
import { Link } from 'react-router-dom';

const ForgotPwd = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await forgotPwd({email});
      setMessage(`Password reset link sent to ${email}`);
      setEmail('');
    };
  
  return (
    <>
    <p>Enter your email to reset your password.</p>
     <div className="forgot-password-container">
     
      <form onSubmit={handleSubmit} className="forgot-password-form">
        <label>Email address:</label>
        <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <button type="submit" className="btn">Send Reset Link</button>
        <div className="form-footer">
          <Link to="/login" className="link">Back to Login</Link>
        </div>
        {message && <div className="mt-3">{message}</div>}
      </form>
    </div>
    </>
  )
}

export default ForgotPwd;