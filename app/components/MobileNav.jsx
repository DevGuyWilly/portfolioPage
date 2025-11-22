"use client";
import { useState } from 'react';
import { FiMenu, FiX, FiHome, FiGrid, FiEdit3, FiUser, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'Home', href: '/', icon: FiHome },
  { label: 'Work', href: '/work', icon: FiGrid },
  { label: 'Notes', href: '/blog', icon: FiEdit3 },
  { label: 'About', href: '/about', icon: FiUser },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button 
         onClick={toggleMenu}
         className="md:hidden fixed bottom-6 right-6 z-[60] w-14 h-14 bg-black text-white dark:bg-white dark:text-black rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
      >
         {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="md:hidden fixed bottom-24 right-6 z-[60] bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 w-64"
          >
              <div className="flex justify-between items-center mb-4 px-2">
                 <span className="text-sm font-bold text-gray-400 uppercase">Menu</span>
                 <ThemeToggle />
              </div>
              
              <nav className="flex flex-col gap-2">
                 {navItems.map((item) => (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-700 dark:text-white"
                    >
                       <item.icon size={20} />
                       <span className="font-medium">{item.label}</span>
                    </Link>
                 ))}
                 
                 <div className="h-px bg-gray-100 dark:bg-gray-800 my-2"></div>
                 
                 <Link 
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-colors text-gray-700 dark:text-white"
                 >
                    <FiMessageSquare size={20} />
                    <span className="font-medium">Quick Message</span>
                 </Link>
              </nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.5 }}
             exit={{ opacity: 0 }}
             onClick={() => setIsOpen(false)}
             className="md:hidden fixed inset-0 bg-black z-[50]"
           />
        )}
      </AnimatePresence>
    </>
  );
}

