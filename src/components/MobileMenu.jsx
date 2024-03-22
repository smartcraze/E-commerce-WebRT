import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ isMenuOpen, onClose, logoutUser }) => {
  const handleLinkClick = () => {
    onClose(); // Close the menu when a link is clicked
  };

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="md:hidden absolute bg-gray-800 py-2 px-4 top-16 left-0 right-0 z-20">
      {logoutUser ? (
        <>
          <Link
            to="/"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/profile"
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
            onClick={handleLinkClick}
          >
            Profile
          </Link>
          <button
            onClick={() => {
              logoutUser();
              onClose(); // Close the menu after logout
            }}
            className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <Link
          to="/login"
          className="block text-white py-2 px-4 font-semibold hover:bg-gray-700 rounded"
          onClick={handleLinkClick}
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default MobileMenu;
