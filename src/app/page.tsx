'use client';

import { PostProps } from '@/types';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';
import FeaturedPosts from '../../components/FeaturedPosts';
import { getPosts } from '../../services';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useEffect } from 'react';

// const posts: PostProps[] = [
//   { title: 'React Testing1', excerpt: 'Learn React Testing' },
//   { title: 'React Testing2', excerpt: 'Learn React Testing' },
//   { title: 'React Testing3', excerpt: 'Learn React Testing' },
// ];
// async function getData() {
//   const res = (await getPosts()) || [];
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

async function getData() {
  const posts = (await getPosts()) || [];
return posts
}

export default function Home() {
  console.log(getData());

  return (
    <main className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {/* posts &&  {
          posts.map(post => (
            <PostCard key={post.title} post={post} />
          ))} */}
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

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];
//   return {
//     props: {
//       posts,
//     },
//   };
// }
