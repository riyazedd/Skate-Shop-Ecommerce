import React, { useState } from 'react';
import API from '../API';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
  
    if (!agreed) {
      alert('You must agree to the terms and privacy policy');
      return;
    }
  
    const data = {
      name: name,
      email: email,
      password: password,
    };
  
    API.post('/user', data)
      .then((res) => {
        if (res.data.success) {
          alert('User Registered Successfully');
          setName('');
          setEmail('');
          setPassword('');
        } else {
          alert('Error Registering User');
        }
      })
      .catch((err) => {
        alert('Error Registering User: ' + err.message);
      });
  };
  

  return (
    <form onSubmit={handleSubmit} className='flex justify-center'>
      <div className='flex flex-col items-center mb-5 mt-16'>
        <h1 className='text-4xl font-bold text-center flex flex-col items-center text-gray-700 uppercase'>
          Sign Up
          <hr className='w-60 mt-2 h-1 bg-gray-700 border-0 rounded-lg' />
        </h1>
        <div className='flex flex-col mt-5 gap-5 w-[350px]'>
          <input
            type='text'
            value={name}
            placeholder='Your Name'
            onChange={(e) => setName(e.target.value)}
            className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg'
            required
          />
          <input
            type='email'
            value={email}
            placeholder='Your Email Address'
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg'
            required
          />
          <input
            type='password'
            value={password}
            placeholder='Your Password'
            onChange={(e) => setPassword(e.target.value)}
            className='border-2 rounded-lg p-3 placeholder:text-lg w-full text-lg'
            required
          />
        </div>
        <button
          className='mt-5 w-[350px] bg-purple-600 p-3 text-white text-2xl rounded-lg'
          type='submit'
        >
          Continue
        </button>
        <p className='mt-3'>
          Already have an account?{' '}
          <span className='text-purple-600 font-semibold'>Login here</span>
        </p>
        <div className='flex gap-2 mt-5'>
          <input
            type='checkbox'
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </form>
  );
};

export default LoginSignup;
