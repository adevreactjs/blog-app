'use client';

import { PostProps } from '@/types';
import React, { FC } from 'react';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';

interface PostCardProps {
  post: PostProps;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute object-cover shadow-lg w-full rounded-t-lg lg:rounded-lg'
          width={100}
          height={80}
        />
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>

    </div>
  );
};

export default PostCard;
