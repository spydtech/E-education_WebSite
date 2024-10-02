

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../State/Theme/Theme';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`pb-5 pl-5 ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
  <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only" onChange={toggleTheme} />
    
    {/* Adjusted width and height */}
    <div className="w-20 h-10 bg-gray-200 dark:bg-gray-700 rounded-full p-1"> 
      {/* Adjusted size and translation */}
      <div className="toggle-dot w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out dark:translate-x-10"></div> 
    </div>
  </label>
</div>


  );
};

export default ThemeToggle;
