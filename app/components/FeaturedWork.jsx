"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

// Helper to handle image paths in both dev and prod (GitHub Pages)
const getImagePath = (src) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolioPage' : '';
  // If src is absolute (http) or data URI, return as is
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  // Ensure src starts with /
  const cleanSrc = src.startsWith('/') ? src : `/${src}`;
  return `${basePath}${cleanSrc}`;
};

export default function FeaturedWork({ projects }) {
  return (
    <section id="featured-work" className="p-8 md:p-12 lg:p-16 border-t border-gray-100">
       <div className="flex justify-between items-end mb-12">
          <div>
             <span className="text-sm font-bold text-gray-400 mb-2 block">01</span>
             <h2 className="text-3xl font-bold">Featured work</h2>
          </div>
          <Link href="/work" className="text-sm font-medium border-b border-black pb-0.5 hover:opacity-70 transition-opacity">
             See all work
          </Link>
       </div>

       <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
             <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
             >
                 <Link href={`/work/${project.slug}`} className="block">
                    <div className="aspect-video w-full bg-gray-100 rounded-2xl overflow-hidden relative mb-6">
                         <Image 
                           src={getImagePath(project.image)} 
                           alt={project.title} 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-700"
                         />
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                           <span className="text-[#ea580c] text-sm font-bold mb-1 block">{project.date}</span>
                           <h3 className="text-2xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
                           <p className="text-gray-600 max-w-xl">{project.excerpt}</p>
                        </div>
                        <div className="bg-gray-100 p-3 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                            <FiArrowRight className="text-xl" />
                        </div>
                    </div>
                 </Link>
             </motion.div>
          ))}
       </div>
    </section>
  );
}

