import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import MobileMenu from "./MobileMenu";
import { ShoppingCart } from "phosphor-react";

const Header = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="flex bg-black text-white p-4 items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link
          to="/"
          className="text-white font-bold text-2xl hover:scale-105 transition duration-300"
        >
          Coding X Smartcraze
        </Link>
      </div>

      {/* Hamburger menu for smaller devices */}
      <button
        className="text-white md:hidden focus:outline-none"
        onClick={handleMenuToggle}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      <MobileMenu isMenuOpen={isMenuOpen} logoutUser={handleLogout} />

      {/* Menu for larger devices */}
      <div className="ml-auto hidden md:flex">
        {user ? (
          <>
            <Link
              to="/"
              className="px-4 py-1 text-lg hover:text-gray-300 focus:text-gray-300 focus:outline-none transition duration-300"
            >
              Home
            </Link >
            <Link to="/shop" className="px-4 py-1 text-lg hover:text-gray-300 focus:text-gray-300 focus:outline-none transition duration-300"> Shop </Link>

            <Link to="/cart" className="px-4 py-1 text-lg hover:text-gray-300 focus:text-gray-300 focus:outline-none transition duration-300">
              <ShoppingCart size={32} />
            </Link>
            <Link
              to="/profile"
              className="px-4 py-1 text-lg hover:text-gray-300 focus:text-gray-300 focus:outline-none transition duration-300"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              type="button"
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
