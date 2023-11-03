import * as React from "react";
import {Link} from "gatsby";
import Layout from "../compnents/Layout";
import SEO from "../compnents/SEO";

function AboutPage() {
  return (
    <Layout pageTitle={"About Me"}>
      <p>Hi, I am a wordpress and react js developer and new to Gatsby development.</p>
    </Layout>
  )
}

export const Head = ()=> <SEO title={"About Page"}/>
export default AboutPage;
