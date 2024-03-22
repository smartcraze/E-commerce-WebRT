import React, { useState, useEffect } from 'react';
import {useAuth} from '../utils/AuthContext'
const Profile = () => {
  const { user } = useAuth();
  const [greeting, setGreeting] = useState('');
  const [background, setBackground] = useState('');

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setBackground('bg-morning');
      return '☀️ Good Morning';
    } else if (hour >= 12 && hour < 17) {
      setBackground('bg-afternoon');
      return '🌤️ Good Afternoon';
    } else {
      setBackground('bg-slate-500');
      return '🌙 Good Evening';
    }
  };
  useEffect(() => {
    const timeOfDay = getTimeOfDay();
    setGreeting(timeOfDay);
  }, []);

  return (
    <>
    <div className='bg-gray-700 min-h-full'>
      <h1 className="text-white text-xl">{greeting},<span className='text-stone-50'>{user.name}</span> </h1>
    <div className=' h-56 w-[90%] bg-cyan-950 rounded-lg mx-auto'>
    </div>

    </div>
    </>
  );
};

export default Profile;
