import React from 'react';
import './Auth.css'; // Include the updated CSS

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2 className="auth-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <div className="auth-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
