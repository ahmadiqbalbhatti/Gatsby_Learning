import Layout from "../../compnents/Layout";
import * as React from "react";
import SEO from "../../compnents/SEO";
import {graphql} from "gatsby";
import {GatsbyImage} from "gatsby-plugin-image";

function BlogPost({data, children}) {
  console.log(data.mdx.frontmatter);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/*<p>My blog post contents will go here (eventually).</p>*/}
      <GatsbyImage alt={data.mdx.frontmatter.hero_image_alt} image={data.mdx.frontmatter.hero_image}/>
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
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image 
      }
    }
  }
`
