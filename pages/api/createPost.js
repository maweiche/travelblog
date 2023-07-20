import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

/** *************************************************************
* Any file inside the folder pages/api is mapped to /api/* and  *
* will be treated as an API endpoint instead of a page.         *
*************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
    const graphQLClient = new GraphQLClient((graphqlAPI), {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
        },
    });

    const title = req.body.title;
    const slug = req.body.slug;
    const excerpt = req.body.excerpt;
    const content = req.body.contentToSubmit;
    const featuredPost = req.body.featuredPost === 'true' ? true : false;
    const featuredimage = 'clkbe8gpj7cfc0bn793c78w8g';
    


    const query = gql`
    mutation CreatePost(
        $title: String!,
        $slug: String!,
        $excerpt: String!,
        $content: RichTextAST!,
        $featuredPost: Boolean!,
        $featuredimage: ID!
    ) {
        createPost(
            data: {
                title: $title,
                slug: $slug,
                excerpt: $excerpt,
                content: $content,
                featuredPost: $featuredPost,
                featuredimage: {
                    connect: {
                        id: $featuredimage  
                    }   
                }
            }
        ) { id }
    }
    `;


    const result = await graphQLClient.request(query, {
        title: title,
        slug: slug,
        excerpt: excerpt,
        content: content,
        featuredPost: featuredPost,
        featuredimage: featuredimage
    });

    return res.status(200).send(result);
}