import { NextResponse } from 'next/server';
import posts from '@/data/posts.json';

export async function GET(request, { params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  
  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }
  
  return NextResponse.json(post);
}

