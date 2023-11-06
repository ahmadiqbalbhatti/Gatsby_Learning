import Layout from "../../compnents/Layout";
import * as React from "react";
import SEO from "../../compnents/SEO";
import {graphql} from "gatsby";
import {
  GatsbyImage,
  getImage
} from "gatsby-plugin-image";

function BlogPost({data, children}) {
  console.log(data);
  const image = getImage(data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData);
  console.log(image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      {/*<p>My blog post contents will go here (eventually).</p>*/}
      <GatsbyImage alt={data.mdx.frontmatter.hero_image_alt} image={image}/>
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
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
