import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import projects from '@/data/projects.json';
import posts from '@/data/posts.json';

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-full">
      <Hero />
      <FeaturedWork projects={featuredProjects} />
      <BlogSection posts={featuredPosts} />
      <Footer />
    </div>
  );
}

