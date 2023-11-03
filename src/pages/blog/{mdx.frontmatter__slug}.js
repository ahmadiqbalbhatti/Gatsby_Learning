import Layout from "../../compnents/Layout";
import * as React from "react";
import SEO from "../../compnents/SEO";
import {graphql} from "gatsby";

function BlogPost({data, children}) {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/*<p>My blog post contents will go here (eventually).</p>*/}
      {children}
    </Layout>
  );
}

export default BlogPost;

export const Head = ({data}) => <SEO title={data.mdx.frontmatter.title}/>;

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
  `
