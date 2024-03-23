import React, { useState, useEffect } from 'react';
import { useAuth } from '../utils/AuthContext';
import { BsPencilSquare } from 'react-icons/bs';

const Profile = () => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');
  const [background, setBackground] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || user.phone);
  const [address, setAddress] = useState(localStorage.getItem('address') || user.address);
  const [postalCode, setPostalCode] = useState(localStorage.getItem('postalCode') || user.postalCode);
  const [editPhoneNumber, setEditPhoneNumber] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [editPostalCode, setEditPostalCode] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [postalCodeError, setPostalCodeError] = useState('');
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setBackground('bg-white');
      return '☀️ Good Morning';
    } else if (hour >= 12 && hour < 17) {
      setBackground('bg-white');
      return '🌤️ Good Afternoon';
    } else {
      setBackground('bg-white');
      return '🌙 Good Evening';
    }
  };

  useEffect(() => {
    const timeOfDay = getTimeOfDay();
    setGreeting(timeOfDay);
  }, []);

  // Handle changes in the phone number
  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    // Check if input contains only integers and length <= 10
    if (/^\d{0,10}$/.test(input)) {
      setPhoneNumber(input);
      localStorage.setItem('phoneNumber', input);
      setPhoneNumberError('');
    } else {
      setPhoneNumberError('Phone number should be numeric and maximum 10 digits.');
    }
  };

  // Handle changes in the postal code
  const handlePostalCodeChange = (e) => {
    const input = e.target.value;
    // You can add validation logic for postal code here
    setPostalCode(input);
    localStorage.setItem('postalCode', input);
    setPostalCodeError('');
  };

  // Handle changes in the address text box
  const handleAddressChange = (e) => {
    const input = e.target.value;
    setAddress(input);
    localStorage.setItem('address', input);
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
        localStorage.setItem('profilePicture', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Toggle edit mode for Phone Number and Address sections
  const toggleEditContactInfo = () => {
    setEditPhoneNumber((prevEditPhoneNumber) => !prevEditPhoneNumber);
    setEditAddress((prevEditAddress) => !prevEditAddress);
    setEditPostalCode((prevEditPostalCode) => !prevEditPostalCode);
  };

  return (
    <div className={`bg-gray-100 min-h-screen ${background}`}>
      <div className="container mx-auto px-4 py-8 flex">
        <div className="w-1/4 flex flex-col items-center">
          <div className="relative flex-shrink-0 py-14">
            {/* Profile picture input */}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              style={{ display: 'none' }}
              id="profilePictureInput"
            />
            <label htmlFor="profilePictureInput" className="cursor-pointer">
              <img
                src={profilePicture || "https://via.placeholder.com/150"}
                alt="Profile"
                className="rounded-full h-48 w-48 object-cover border-4 border-white"
              />
            </label>
            <div className="absolute top-0 right-0 cursor-pointer" onClick={toggleEditContactInfo}>
              <BsPencilSquare size={24} />
            </div>
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <h1 className="text-gray-800 text-3xl font-bold mb-4">{greeting}, <span className="text-gray-600">{user.name}</span></h1>
          <div className="border border-gray-300 rounded-lg p-6 mb-8">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
                <h2 className="text-gray-800 text-lg font-semibold mb-4">
                  Phone Number
                </h2>
                {editPhoneNumber ? (
                  <>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="bg-gray-200 rounded-md p-2 w-full resize-none border border-gray-200"
                      maxLength={10}
                    />
                    {phoneNumberError && <p className="text-red-500">{phoneNumberError}</p>}
                  </>
                ) : (
                  <p>{phoneNumber}</p>
                )}
              </div>
              <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
                <h2 className="text-gray-800 text-lg font-semibold mb-4">Address</h2>
                {editAddress ? (
                  <textarea
                    value={address}
                    onChange={handleAddressChange}
                    className="bg-gray-200 rounded-md p-2 w-full h-24 resize-none border border-gray-200"
                  />
                ) : (
                  <p>{address}</p>
                )}
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="text-gray-800 text-lg font-semibold mb-4">Postal Code</h2>
                {editPostalCode ? (
                  <input
                    type="text"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    className="bg-gray-200 rounded-md p-2 w-full resize-none border border-gray-200"
                  />
                ) : (
                  <p>{postalCode}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
