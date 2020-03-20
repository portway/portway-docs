/* eslint-disable camelcase */
module.exports = {
  siteMetadata: {
    title: `Portway Documentation`,
    description: `A notes app for people who need to do more`,
    author: `BonkeyϟBong, LLC`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portway-documentation`,
        short_name: `portay docs`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-portway',
      options: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm9yZ0lkIjoxLCJpYXQiOjE1ODM5NjM0MDUsImlzcyI6ImJvbmtleWJvbmcifQ.WWFbAZzUAQWqBmMQz5o8jqChI_sJ5vLqgtqSAMEoU40',
        projectId: 44
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
