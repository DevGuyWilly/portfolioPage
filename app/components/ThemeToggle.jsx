"use client";
import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative overflow-hidden"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
       <motion.div
         initial={false}
         animate={{ rotate: isDark ? 180 : 0 }}
         transition={{ duration: 0.3 }}
       >
         {isDark ? <FiMoon className="text-yellow-400" /> : <FiSun className="text-orange-500" />}
       </motion.div>
    </button>
  );
}

