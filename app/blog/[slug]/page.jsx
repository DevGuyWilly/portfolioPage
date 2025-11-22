import Link from 'next/link';
import { notFound } from 'next/navigation';
import posts from '@/data/posts.json';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';
import Image from 'next/image';

// Helper to handle image paths
const getImagePath = (src) => {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  return src;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  // Next.js 15+ requires awaiting params
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="p-8 md:p-12 lg:p-16 min-h-full max-w-4xl mx-auto">
       <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white mb-12 transition-colors">
          <FiArrowLeft /> Back to notes
       </Link>

       <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-gray-500 dark:text-gray-400 mb-6 text-sm">
             <span className="flex items-center gap-2"><FiCalendar /> {post.date}</span>
             <span>•</span>
             <span className="flex items-center gap-2"><FiClock /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{post.excerpt}</p>
          
          {post.coverImage && (
             <div className="mt-8 w-full aspect-video relative rounded-2xl overflow-hidden shadow-lg">
                <Image 
                  src={getImagePath(post.coverImage)} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                  priority
                />
             </div>
          )}
       </header>

       <div className="prose prose-lg prose-gray dark:prose-invert mx-auto">
           {/* Rendering content with simple paragraph parsing for now */}
           {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                 return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace('##', '').trim()}</h2>;
              }
              if (paragraph.startsWith('###')) {
                 return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.replace('###', '').trim()}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                 return (
                   <ul key={index} className="list-disc pl-5 mb-4">
                     {paragraph.split('\n').map((item, i) => (
                        <li key={i}>{item.replace('- ', '')}</li>
                     ))}
                   </ul>
                 );
              }
              if (paragraph.startsWith('![')) {
                 // Basic image markdown parser: ![alt](src)
                 const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
                 if (match) {
                    return (
                       <figure key={index} className="my-8">
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                             <Image 
                               src={getImagePath(match[2])} 
                               alt={match[1]} 
                               fill 
                               className="object-cover"
                             />
                          </div>
                          <figcaption className="text-center text-sm text-gray-500 mt-2">{match[1]}</figcaption>
                       </figure>
                    );
                 }
              }
              return <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">{paragraph}</p>;
           })}
       </div>
    </article>
  );
}
