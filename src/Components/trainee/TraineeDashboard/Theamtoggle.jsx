import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../State/Theme/Theme';

const ThemeSelector = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    dispatch(setTheme(newTheme));
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className={`pb-5 pl-5 ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
      <label htmlFor="theme-selector" className="mr-3">Select Theme:</label>
      <select
        id="theme-selector"
        value={currentTheme}
        onChange={handleThemeChange}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-2 rounded"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
