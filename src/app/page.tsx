import { PostProps } from '@/types';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';
import FeaturedPosts from '../../components/FeaturedPosts';
import { getPosts } from '../../services';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useEffect } from 'react';

async function getData() {
  let result = (await getPosts().then(data => data[0].node)) || [];
  return { data: result };
}

export default async function Home() {
  const posts = (await getData()).data;
  const allPosts = []
  allPosts.push(posts)

  return (
    <main className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {allPosts.map(post => (
            <PostCard key={post} post={post} />
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}

