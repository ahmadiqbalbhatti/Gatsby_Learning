import Layout from "../compnents/Layout";
import SEO from "../compnents/SEO";
import * as React from "react";
import {graphql} from "gatsby";

function BlogPage({data}) {
  const posts = data?.allFile?.nodes;

  return (
    <Layout pageTitle={"My Blog Page"}>
      <ul>
        {posts.map(post => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default BlogPage;

export const Head = () => <SEO title={"My Blog Posts Page"}/>;

export const query = graphql`
  query MyQuery {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
      totalCount
    }
  }
`;
