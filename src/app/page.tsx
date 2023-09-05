import { PostProps } from '@/types';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';
import FeaturedPosts from '../../components/FeaturedPosts';
import { getPosts } from '../../services';

async function getData() {
  let result = (await getPosts()) || [];
  return result;
}

export default async function Home() {
  const posts = await getData();

  return (
    <main className='container mx-auto px-10 mb-8'>
      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((post: PostProps) => (
            <PostCard key={post.cursor} post={post} />
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
