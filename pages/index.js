import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { FeaturedPost } from '../sections';
import { useEffect, useState } from 'react';


export default function Home() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    getPosts()
    .then((result) => setPosts(result))
  }, [])
  
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Cardy's Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FeaturedPost />
      <div className = 'grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className = 'lg:col-span-8 col-span-1'>
          {posts.map((post) => (
          <PostCard post = {post.node} key = {post.node.title} /> 
        ))}
        </div>
        <div className = 'lg:col-span-4 col-span-1'>
          <div className = 'lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const posts = (await getPosts()) || [];

//   return {
//     props: {posts}
//   }
// }
