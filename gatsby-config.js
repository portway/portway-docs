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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
