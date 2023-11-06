/**
 * @type {import("gatsby").GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title      : `My Gatsby Learning Website`,
    description: `A Gatsby starter with no plugins and a single welcome page.`,
    siteUrl    : `https://ahmadiqbalbhatti.com`
  },
  plugins     : [
    "gatsby-plugin-mdx",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog/`
      }
    }
  ]
};
