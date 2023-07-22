import { PostCard, Categories, PostWidget, FeaturedVideoCard, Landing, Header } from '../components'
import { getPosts } from '../services'
import { FeaturedPosts } from '../sections';


export default function Home({ posts }) {
  // console.log("these are posts", {posts})
  return (
    <div className="container  mb-8">
      <Landing />
      <FeaturedPosts />
      {/* <div >
        <FeaturedVideoCard />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}