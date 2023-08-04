import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import MainLayout from '../../layout/MainLayout';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'rgb(232, 164, 176)',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };
  const inputStyle = {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
    width: '300px',
    marginBottom: '10px',
  };

  const login = (e)=> {
    //todo: log in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  return (
    <MainLayout>
   
    <div>
      <form style={formStyle} className="form"onSubmit={login}>
        <h2>Login</h2>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input className='input'
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={buttonStyle}>Log In</button>
      </form>
    </div>
    </MainLayout>
  );
}
