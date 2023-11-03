import * as React from "react";
import useSiteMetaData from "../hooks/useSiteMetaData";

function SEO({title}) {
  const data = useSiteMetaData();

  return (
    <>
      <title>{title} | {data?.title}</title>
      <meta name={"description"} content={data?.description}/>
    </>
  );
}

export default SEO;
