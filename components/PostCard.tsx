'use client';

import { PostProps } from '@/types';
import React, { FC } from 'react';

interface PostCardProps {
  post: PostProps;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className='text-white'>
      {post.title} {post.excerpt}
    </div>
  );
};

export default PostCard;
