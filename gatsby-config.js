/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */
// import config from "./data/siteConfig";
const config = require("./data/siteConfig");

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `CS of Ivan Obeso Aguera (@ivanob)`,
    description: `This is my CV page with a description about me, my skills, my portfolio and my education`,
    author: `Ivan Obeso Aguera`,
    siteUrl: `https://www.ivanobeso.dev`,
    ...config
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
  ],
}
