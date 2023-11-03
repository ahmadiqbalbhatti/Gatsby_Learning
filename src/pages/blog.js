import Layout from "../compnents/Layout";
import SEO from "../compnents/SEO";
import * as React from "react";
import {graphql} from "gatsby";

// import {graphql} from "gatsby";

function BlogPage({data}) {
  const posts = data?.allMdx?.nodes;

  console.log(posts);
  return (
    <Layout pageTitle={"My Blog Page"}>
      {posts?.map(post => (
        <article key={post.id}>
          <h2>{post.frontmatter.title}</h2>
          <p>Posted: {post.frontmatter.date}</p>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
}

export default BlogPage;

export const Head = () => <SEO title={"My Blog Posts Page"}/>;

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM-D-YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
