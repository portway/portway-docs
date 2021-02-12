/* eslint-disable camelcase */

module.exports = {
  siteMetadata: {
    title: `Portway Documentation`,
    description: `A notes app for people who need to do more`,
    keywords: `Notes, Markdown, API, REST, CMS, Content management system, Developers`,
    author: `BonkeyϟBong, LLC`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: '@portway/gatsby-source-portway',
      options: {
        draft: process.env.PORTWAY_DRAFT,
        token: process.env.PORTWAY_TOKEN,
        projectId: process.env.PORTWAY_PROJECT_ID
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
