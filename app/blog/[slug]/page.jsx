import Link from 'next/link';
import { notFound } from 'next/navigation';
import posts from '@/data/posts.json';
import { FiArrowLeft, FiClock, FiCalendar } from 'react-icons/fi';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="p-8 md:p-12 lg:p-16 min-h-full max-w-4xl mx-auto">
       <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black mb-12 transition-colors">
          <FiArrowLeft /> Back to blog
       </Link>

       <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 text-gray-500 mb-6 text-sm">
             <span className="flex items-center gap-2"><FiCalendar /> {post.date}</span>
             <span>•</span>
             <span className="flex items-center gap-2"><FiClock /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{post.excerpt}</p>
       </header>

       <div className="prose prose-lg prose-gray mx-auto">
           {/* In a real app, this would be rendered markdown */}
           <p>{post.content}</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac odio ante.</p>
           <h3>Subheading Example</h3>
           <p>Donec luctus, urna vitae suscipit venenatis, nulla libero consequat ante, non eleifend diam lorem non nisl. Sed eget posuere odio. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.</p>
       </div>
    </article>
  );
}

