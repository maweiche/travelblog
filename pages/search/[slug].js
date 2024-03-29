import React from 'react';
import { useRouter } from 'next/router';

import { searchForPost, getCategories } from '../../services';
import { PostCard, Categories, Loader } from '../../components';

const SearchResults = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
            {posts.length === 0 ? 
                <h1 className="text-2xl font-bold">No results found</h1> : 
                (posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))
            )}
          {}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchResults;

// Fetch data at build time
export async function getStaticProps({ params }) {
    // create req object to pass to searchForPost convert params to string change + to space
    const req = {
        body: {
            searchTerm: params.slug.replace(/\+/g, ' '),
        },
    };
    const posts = await searchForPost(req);
    return {
        props: {
            posts,
        },
        revalidate: 1,
    };
}


// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}