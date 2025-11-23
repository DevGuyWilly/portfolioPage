import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

// Helper to handle image paths
const getImagePath = (src) => {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  return src;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  // Next.js 15+ requires awaiting params
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full">
       <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-8 transition-colors">
          <FiArrowLeft /> Back to work
       </Link>

       <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
             {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-[#ea580c]/10 text-[#ea580c] rounded-full text-sm font-bold">
                   {tag}
                </span>
             ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">{project.excerpt}</p>
       </header>

       <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative mb-12 shadow-lg">
           <Image 
             src={getImagePath(project.image)} 
             alt={project.title} 
             fill 
             className="object-cover"
             priority
           />
       </div>

       <div className="grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2">
               <h2 className="text-2xl font-bold mb-6">About the project</h2>
               <div className="prose prose-lg text-gray-600 dark:text-gray-300 dark:prose-invert max-w-none">
                   {project.description.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                   ))}
               </div>
           </div>
           
           <div className="space-y-10">
               <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Links</h3>
                  <div className="flex flex-col gap-4">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[#ea580c] transition-colors">
                         <FiExternalLink className="text-lg" /> Live Demo
                      </a>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[#ea580c] transition-colors">
                         <FiGithub className="text-lg" /> Source Code
                      </a>
                  </div>
               </div>
               
               <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Date</h3>
                  <p className="font-medium text-lg">{project.date}</p>
               </div>
           </div>
       </div>
    </div>
  );
}
