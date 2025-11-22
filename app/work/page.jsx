"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import projects from '@/data/projects.json';
import { FiArrowRight } from 'react-icons/fi';

// Helper to handle image paths
const getImagePath = (src) => {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  return src;
};

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

export default function WorkPage() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full">
      <div className="max-w-3xl mb-12">
         <h1 className="text-4xl font-bold mb-6">Selected Work</h1>
         <p className="text-gray-600 text-lg">A collection of projects I've worked on, ranging from web applications to design systems.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-12">
         {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                 filter === tag 
                 ? 'bg-black text-white' 
                 : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
         ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
         {filteredProjects.map((project, index) => (
             <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
             >
                 <Link href={`/work/${project.slug}`} className="block">
                    <div className="aspect-[4/3] w-full bg-gray-100 rounded-2xl overflow-hidden relative mb-4">
                         <Image 
                           src={getImagePath(project.image)} 
                           alt={project.title} 
                           fill 
                           className="object-cover group-hover:scale-105 transition-transform duration-700"
                           loading="lazy"
                         />
                    </div>
                    <div>
                       <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold group-hover:text-[#ea580c] transition-colors">{project.title}</h3>
                          <FiArrowRight className="text-xl opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                       </div>
                       <p className="text-gray-600 text-sm line-clamp-2 mb-3">{project.excerpt}</p>
                       <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                             <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-md text-gray-500">
                               {tag}
                             </span>
                          ))}
                       </div>
                    </div>
                 </Link>
             </motion.div>
         ))}
      </div>
    </div>
  );
}

