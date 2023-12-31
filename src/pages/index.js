import * as React from "react";
import Layout from "../compnents/Layout";
import {StaticImage} from "gatsby-plugin-image";
import SEO from "../compnents/SEO";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      {/*<StaticImage src={"../images/icon.png"} alt={"logo" }/>*/}
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <SEO title={"Home Page"}/>
