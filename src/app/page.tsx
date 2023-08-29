'use client';

import { PostProps } from '@/types';
import PostCard from '../../components/PostCard';

const posts: PostProps[] = [
  { title: 'React Testing1', excerpt: 'Learn React Testing' },
  { title: 'React Testing2', excerpt: 'Learn React Testing' },
  { title: 'React Testing3', excerpt: 'Learn React Testing' },
];

export default function Home() {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
          {posts.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'></div>
      </div>
    </main>
  );
}
