import * as React from "react";
import Layout from "../compnents/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Home Page"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
