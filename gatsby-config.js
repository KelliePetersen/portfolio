module.exports = {
  siteMetadata: {
    title: `Kellie Petersen - Front End React Developer`,
    description: `Front End developer specialising in JavaScript, React, Gatsby and NextJS.`,
    author: `Kellie Petersen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kellie Petersen Portfolio`,
        short_name: `KPetersen`,
        start_url: `/`,
        background_color: `#3aa390`,
        theme_color: `#3aa390`,
        display: `minimal-ui`,
        icon: `src/images/logo-white.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
