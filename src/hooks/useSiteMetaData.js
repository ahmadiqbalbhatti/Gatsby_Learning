import {
  graphql,
  useStaticQuery
} from "gatsby";

function useSiteMetaData() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          siteUrl
          description
        }
      }
    }
    `);

  return data?.site?.siteMetadata;
}

export default useSiteMetaData;
