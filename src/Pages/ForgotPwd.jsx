import React, { useState } from 'react';
import "./ForgotPwd.css";
import { forgotPwd } from '../crud.jsx';

const ForgotPwd = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Perform validation or send email request (backend logic)
      await forgotPwd({email});
      setMessage(`Password reset link sent to ${email}`);
      setEmail('');
    };
  
  return (
    <>
    <p>Enter your email to reset your password.</p>
     <div className="forgot-password-container">
     
      <form onSubmit={handleSubmit} className="forgot-password-form">
        {/* <p>Enter your email to reset your password.</p> */}
        <label>Email address:</label>
        <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <button type="submit" className="btn">Send Reset Link</button>
        <div className="form-footer">
          <a href="/login" className="link">Back to Login</a>
        </div>
        {message && <div className="mt-3">{message}</div>}
      </form>
    </div>
    </>
  )
}

export default ForgotPwd;