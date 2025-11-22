import { NextResponse } from 'next/server';
import projects from '@/data/projects.json';

export async function GET(request, { params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  
  return NextResponse.json(project);
}

