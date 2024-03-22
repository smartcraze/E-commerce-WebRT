import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Login = () => {
  const { user, loginUser } = useAuth();
  const navigate = useNavigate();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <div className="flex justify-center items-center min-h-[89.45vh] bg-gradient-to-br from-slate-500 to-neutral-900">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg overflow-hidden flex">
        <div className="w-1/2 bg-cover" style={{ backgroundImage: 'url(https://images.pexels.com/photos/2566573/pexels-photo-2566573.jpeg?auto=compress&cs=tinysrgb&w=800)' }}></div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit} ref={loginForm} className="space-y-4">
            <div className="form-field-wrapper">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                required
                type="email"
                name="email"
                id="email"
                placeholder="Enter email..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div className="form-field-wrapper">
              <label htmlFor="password" className="block mb-1">Password:</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password..."
                autoComplete="password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Login"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </form>
          <p className="mt-4">
            Don't have an account? <Link to="/register" className="text-blue-500 hover:text-blue-700">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
