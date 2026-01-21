import React, { useState, useEffect } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  // Validate form whenever email or password changes
  useEffect(() => {
    const emailValid = email.length > 0 && email.includes('@');
    const passwordValid = password.length >= 6;
    setIsFormValid(emailValid && passwordValid);
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Submit login logic
      console.log('Submitting login...');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button 
        type="submit" 
        disabled={!isFormValid}
        className="submit-button"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;