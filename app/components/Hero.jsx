"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCopy, FiCalendar, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

// Helper to handle image paths in both dev and prod (GitHub Pages)
const getImagePath = (src) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolioPage' : '';
  return `${basePath}${src}`;
};

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('wdagah14@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 min-h-[90vh] flex flex-col justify-center relative">
      {/* Top Meta */}
      <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
         <div className="flex items-center gap-5">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-100">
               <Image src={getImagePath("/assets/profile-picture.jpg")} alt="Wilson Dagah" fill className="object-cover" />
            </div>
            <div>
               <h3 className="font-bold text-lg">Wilson Dagah</h3>
               <p className="text-sm text-gray-500">@DevGuyWilly</p>
            </div>
         </div>
         <div className="text-xs text-gray-400 uppercase tracking-wider">
            {/* Portfolio ©2025 */}
         </div>
      </div>

      {/* Main Heading */}
      <div className="mt-30 md:mt-10 max-w-4xl">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Software Engineer <br/> <span className="text-gray-400 text-4xl md:text-6xl">(Java / JS / TS)</span>
        </motion.h1>
        
        <motion.p 
           className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          I’m a forward-thinking <strong>Software Engineer</strong> specializing in designing, building, and deploying resilient, scalable, data-driven applications using <strong className="text-black">Java</strong> and <strong className="text-black">Python</strong> across cloud platforms.
        </motion.p>
        
        <motion.div 
           className="flex flex-wrap items-center gap-6"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
             {/* CTAs */}
             <button 
                onClick={copyEmail}
                className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-all active:scale-95"
             >
                <FiCopy />
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
             </button>
             
             <a 
                href="mailto:wdagah14@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:border-gray-400 rounded-full font-medium transition-all active:scale-95 shadow-sm hover:shadow-md"
             >
                <FiMail />
                <span>Contact Me</span>
             </a>
             
             {/* Socials */}
             <div className="flex items-center gap-4 ml-4 border-l pl-6 border-gray-200">
                 <a href="https://github.com/DevGuyWilly" target="_blank" rel="noopener noreferrer" className="p-2 bg-[#ea580c] text-white rounded-full text-xs font-bold px-3 hover:scale-105 transition-transform flex items-center gap-2">
                    <FiGithub className="text-lg" /> Github
                 </a>
                 <div className="flex gap-3 text-xl text-gray-600">
                    <a href="https://www.linkedin.com/in/wilson-dachomo-dagah/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className="hover:text-[#0077b5] cursor-pointer transition-colors" />
                    </a>
                 </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
