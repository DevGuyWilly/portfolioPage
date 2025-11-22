"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiGrid, FiEdit3, FiUser, FiMessageSquare, FiSearch, FiLayout, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/', icon: FiHome },
  { label: 'Work', href: '/work', icon: FiGrid },
  { label: 'Blog', href: '/blog', icon: FiEdit3 },
  { label: 'About', href: '/about', icon: FiUser },
];

import ThemeToggle from './ThemeToggle';

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <aside 
      className={`hidden md:flex flex-col justify-between p-6 h-screen sticky top-0 z-50 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-[13rem]'
      }`}
    >
        <nav className="flex flex-col gap-2">
            <div className={`flex items-center mb-8 px-2 text-gray-500 transition-all duration-300 ${isCollapsed ? 'justify-center flex-col gap-6' : 'justify-between'}`}>
                 <ThemeToggle />
                 
                 <button 
                   onClick={toggleCollapse} 
                   className="hover:text-black transition-colors p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white"
                   title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                 >
                   <FiLayout className="w-5 h-5" />
                 </button>
            </div>

            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link 
                        key={item.href} 
                        href={item.href}
                        className={`relative px-4 py-3 group flex items-center ${isCollapsed ? 'justify-center' : ''}`}
                        title={isCollapsed ? item.label : ''}
                    >
                        {isActive && (
                           <motion.div 
                             layoutId="activeNav"
                             className="absolute inset-0 bg-white rounded-xl shadow-sm"
                             initial={false}
                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
                           />
                        )}
                        <div className={`relative flex items-center gap-3 z-10 ${isActive ? 'text-black' : 'text-gray-500 group-hover:text-gray-800'}`}>
                             <item.icon className="w-5 h-5" />
                             {!isCollapsed && (
                               <motion.span 
                                 initial={{ opacity: 0, x: -10 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 className="font-medium"
                               >
                                 {item.label}
                               </motion.span>
                             )}
                        </div>
                    </Link>
                );
            })}
        </nav>

        <button className={`flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white hover:shadow-sm rounded-xl transition-all w-full group ${isCollapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
               <FiMessageSquare size={14} />
            </div>
            {!isCollapsed && (
              <span className="font-medium text-sm whitespace-nowrap">Quick message</span>
            )}
        </button>
    </aside>
  );
}
