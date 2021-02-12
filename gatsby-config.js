/* eslint-disable camelcase */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Portway Documentation`,
    description: `Work on a range of content projects with your team, on any device.`,
    keywords: `Documents, Notes, Collaborative, Writing, Markdown, API, REST, Developers, GatsbyJS, 11ty, Headless CMS`,
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
