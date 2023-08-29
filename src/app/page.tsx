import { PostProps } from '@/types';
import PostCard from '../../components/PostCard';
import PostWidget from '../../components/PostWidget';
import Categories from '../../components/Categories';

const posts: PostProps[] = [{ title: 'React Testing', excerpt: 'Learn React Testing' }];

export default function Home() {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
          {posts.map(post => (
            <PostCard key={post.title} post={post}/>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget/>
            <Categories/>
          </div>
        </div>
      </div>
    </main>
  );
}
