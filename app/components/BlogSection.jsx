"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function BlogSection({ posts }) {
  return (
    <section id="blog" className="p-8 md:p-12 lg:p-16 border-t border-gray-100 dark:border-gray-800">
        <div className="flex justify-between items-end mb-12">
          <div>
             <span className="text-sm font-bold text-gray-400 mb-2 block">02</span>
             <h2 className="text-3xl font-bold">Latest notes</h2>
          </div>
          <Link href="/blog" className="text-sm font-medium border-b border-black dark:border-white pb-0.5 hover:opacity-70 transition-opacity">
             Read notes
          </Link>
       </div>

       <div className="grid gap-8">
           {posts.map((post, index) => (
               <motion.div
                 key={post.id}
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
               >
                   <Link href={`/blog/${post.slug}`} className="group block p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                       <div className="flex justify-between items-baseline mb-2">
                           <span className="text-sm font-bold text-[#ea580c]">{post.date}</span>
                           <span className="text-xs text-gray-500">{post.readTime}</span>
                       </div>
                       <h3 className="text-xl font-bold mb-2 group-hover:text-[#ea580c] transition-colors">{post.title}</h3>
                       <p className="text-gray-600 text-sm">{post.excerpt}</p>
                   </Link>
               </motion.div>
           ))}
       </div>
    </section>
  );
}

