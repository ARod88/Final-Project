import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 200) {
        const result = await response.json();
        console.log(result);

        if (result && result._id) {
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/');
        } else {
          alert('User not found. Please check your email and password.');
        }
      } else if (response.status === 401) {
        alert('Invalid credentials. Please try again.');
      } else {
        alert('An error occurred while logging in.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred while logging in.');
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="appButton" type="button">Login</button>
    </div>
  );
};

export default Login;
