import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full">
       <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">{project.excerpt}</p>
       </header>

       <div className="aspect-video w-full bg-gray-100 rounded-2xl overflow-hidden relative mb-12">
           <Image 
             src={project.image} 
             alt={project.title} 
             fill 
             className="object-cover"
             priority
           />
       </div>

       <div className="grid md:grid-cols-3 gap-12">
           <div className="md:col-span-2">
               <h2 className="text-2xl font-bold mb-4">About the project</h2>
               <div className="prose prose-lg text-gray-600">
                   <p>{project.description}</p>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
               </div>
           </div>
           
           <div className="space-y-8">
               <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Links</h3>
                  <div className="flex flex-col gap-3">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[#ea580c] transition-colors">
                         <FiExternalLink /> Live Demo
                      </a>
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-medium hover:text-[#ea580c] transition-colors">
                         <FiGithub /> Source Code
                      </a>
                  </div>
               </div>
               
               <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Date</h3>
                  <p className="font-medium">{project.date}</p>
               </div>
           </div>
       </div>
    </div>
  );
}

