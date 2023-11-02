import * as React from "react";
import {Link} from "gatsby";
import Layout from "../compnents/Layout";

function AboutPage() {
  return (
    <Layout pageTitle={"About Me"}>
      <p>Hi, I am a wordpress and react js developer and new to Gatsby development.</p>
    </Layout>
  )
}

export const Head = ()=> <title>About Me</title>
export default AboutPage;
