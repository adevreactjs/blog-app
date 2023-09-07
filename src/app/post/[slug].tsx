import { useRouter } from 'next/router';
import React from 'react';
import Categories from '../../../components/Categories';
import PostDetail from '../../../components/PostDetail';
import Author from '../../../components/Author';
import CommentsForm from '../../../components/CommentsForm';
import Comments from '../../../components/Comments';
import PostWidget from '../../../components/PostWidget';
import { getPostDetails, getPosts } from '../../../services';

const PostDetails = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const post = (await getPostDetails(params.slug)) || [];

  if (router.isFallback) {
    return <Loader />;
  }
  console.log(post);

  return (
    <>
      <div className='container mx-auto px-10 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget
                slug={post.slug}
                categories={post.categories.map(category => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
