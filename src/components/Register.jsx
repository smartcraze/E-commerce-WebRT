import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const Register = () => {
  const registerForm = useRef(null);
  const { registerUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
  
    if (password1 !== password2) {
      alert('Passwords did not match!');
      return;
    }
  
    const userInfo = { name, email, password1, password2 };
  
    registerUser(userInfo);
  };
  
  
  return (
    <div className="flex justify-center items-center min-h-[89.45vh] bg-gradient-to-br from-slate-500 to-neutral-900">
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg overflow-hidden flex">
        <div className="w-1/2 p-8 bg-gray-100">
          <h1 className="text-2xl text-center font-semibold mb-4">Register</h1>
          <form ref={registerForm} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Name:</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                placeholder="Enter name..."
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
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
            <div>
              <label htmlFor="password1" className="block mb-1">Password:</label>
              <input
                type="password"
                name="password1"
                id="password1"
                placeholder="Enter password..."
                autoComplete="password1"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <label htmlFor="password2" className="block mb-1">Confirm Password:</label>
              <input
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm password..."
                autoComplete="password2"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Register"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
              />
            </div>
          </form>
          <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login</Link></p>
        </div>
        <div className="w-1/2  bg-cover " style={{backgroundImage: 'url(https://plus.unsplash.com/premium_photo-1661770294094-06167872e079?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY5fHxyZWdpc3RlcnxlbnwwfHwwfHx8MA%3D%3D)'}}></div>
      </div>
    </div>
  );
};

export default Register;
