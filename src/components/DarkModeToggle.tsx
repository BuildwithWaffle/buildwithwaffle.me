"use client";

import { useTheme } from '@/contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 group"
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        {theme === 'light' ? (
          <FaMoon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
        ) : (
          <FaSun className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
        )}
      </div>
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </span>
    </button>
  );
};

export default DarkModeToggle;
