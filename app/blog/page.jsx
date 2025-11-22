import Link from 'next/link';
import posts from '@/data/posts.json';
import { FiArrowRight } from 'react-icons/fi';

export default function BlogPage() {
  return (
    <div className="p-8 md:p-12 lg:p-16 min-h-full">
      <div className="max-w-3xl mb-12">
         <h1 className="text-4xl font-bold mb-6">Blog</h1>
         <p className="text-gray-600 text-lg">Thoughts on design, development, and the future of the web.</p>
      </div>

      <div className="grid gap-8">
         {posts.map((post) => (
             <Link key={post.id} href={`/blog/${post.slug}`} className="group block p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-colors">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                            <span className="text-[#ea580c] font-bold text-sm">{post.date}</span>
                            <span className="text-gray-400 text-sm">•</span>
                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-[#ea580c] transition-colors">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-end">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                            <FiArrowRight className="text-xl" />
                        </div>
                    </div>
                </div>
             </Link>
         ))}
      </div>
    </div>
  );
}

