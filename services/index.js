import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredimage {
                url
              }
              categories {
                ... on Category {
                  id
                  name
                  slug
                }
              }
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredimage {
          url
        }
        author{
          name
          bio
          photo {
            url
          }
        }
        createdAt
        slug
        content {
          raw
          json
          html
          markdown
          text
        }
        categories {
          ... on Category {
            id
            name
            slug
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};


export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      posts(
        
        orderBy: createdAt_ASC
        last: 3
        ) {
          title
          featuredimage {
            url
          }
          createdAt
          slug
        }
    }
  `
  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      posts(
        where: {slug_not: $slug}
        last: 3
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query GetGategories {
        categories {
          id
          name
          slug
        }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug:String!) {
      comments(where: {post: {slug:$slug}}){
        name
        createdAt
        comment
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredimage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredimage {
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategoryPost = async (slug) => {
  const query = gql`
  query GetCategoryPost($slug: String!) {
    postsConnection(where: {categories_some: {slug: $slug}}) {
      edges {
        cursor
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredimage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};


export const searchForPost = async (req) => {
  console.log('incoming req', req.body.searchTerm);
  const query = gql`
    query SearchForPost($searchTerm: String!) {
      posts(where: {excerpt_contains: $searchTerm}) {
        title
        author {
          name
          photo {
            url
          }
        }
        slug
        excerpt
        featuredimage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, {
    searchTerm: req.body.searchTerm,
  });

  return result.posts;
}

export const addEmailAddress = async (email) => {
  console.log('email', email);
  // mutation CreateEmail {
  //   createEmail(data: {address: "a"}) {
  //     id
  //   }
  // }
  
  const query = gql`
    mutation AddEmailAddress($email: String!) {
      createEmail(data: {address: $email}) {
        id
      }
    }
  `;

  const result = await request(graphqlAPI, query, { email });

  // publish email
  const query2 = gql`
    mutation PublishEmail($id: ID!) {
      publishEmail(where: {id: $id}, to: PUBLISHED) {
        address
      }
    }
  `;

  const result2 = await request(graphqlAPI, query2, { id: result.createEmail.id });

  return result.createEmail;
}