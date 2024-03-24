import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link from react-router-dom for navigating
import axios from 'axios';
import './Register.css'; 

import { ToastContainer, toast } from 'react-toastify'; // React toastify for notifications
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  //Variables for name ,email and pw
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const notify = () => toast("Successfully registered!");

   
  //Function for handle registration
  const handleRegister = async () => {
    try {
      //Post req for register endpoint
      const response = await axios.post('https://localhost:7204/api/User/register', {
        name: name,
        email: email,
        password: password,
      });
      console.log('Registration successful', response.data);
      notify();
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form className="register-form">
        <div>
         
          <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
         
          <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
 
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <ToastContainer/>
      </form>
        <Link className='register-form1' to="/login">
          <button type="button">If you have an Account?</button>
        </Link>
        <ToastContainer />
      
    </div>
  );
};

export default RegisterPage;
