import React, { useState } from 'react'
import API from '../API';
import { useNavigate , Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error, setError] = useState('');

    const navigate= useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          
          const res = await API.post('/user/search', { email, password });
          
          if (res.data === 'success') {
            alert('Logged in Sucessfully')
            navigate('/');
          } else {
            setError(res.data); 
          }
        } catch (err) {
          setError('An error occurred while logging in.');
        }
      };

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex justify-center'>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className='flex flex-col items-center mb-5 mt-16'>
        <h1 className='text-4xl font-bold text-center flex flex-col items-center text-gray-700 uppercase'>
          Login
          <hr className='w-60 mt-2 h-1 bg-gray-700 border-0 rounded-lg' />
        </h1>
        <div className='flex flex-col mt-5 gap-5 w-[350px]'>
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
          Don't have an account?{' '}
          <Link to='/signup'><span className='text-purple-600 font-semibold'>Signup</span></Link>
        </p>
      </div>
    </form>
    </div>
  )
}

export default Login
