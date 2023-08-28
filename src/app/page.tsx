import { PostProps } from "@/types";

const posts:PostProps[] = [
 { title: 'React Testing',
  excerpt:  'Learn React Testing'}
]

export default function Home() {
  return (
    <main className='container mx-auto px-10 mb-8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div>
          {posts.map(post => (
            <div key={post.title} className='col-span-1 lg:col-span-12'>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='lg:col-span-4 col-span-1'></div>
      </div>
    </main>
  );
}
