import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

//variables for email and pw 
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
//Cunction handle to login
  const handleLogin = async () => {
    try {
      //Post req to login endpoind
      const response = await axios.post('https://localhost:7204/api/User/login', {
        email: email,
        password: password,
      });
      console.log('Login successful', response.data);

    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form className="login-form">
        <div>
          <input type="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <Link className="login-form" to="/app">
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        </Link>


        <Link className="login-form1" to="/registration">
          <button type="button">If you haven't an account?</button>
        </Link>
      </form>

    </div>
  );
};

export default LoginPage;
