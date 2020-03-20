/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
*/
const path = require('path')
const marked = require('marked')
const queries = require('./src/queries')

exports.onCreateWebpackConfig = (params) => {
  const webpackConfig = params.getConfig()
  delete webpackConfig.resolve.alias['core-js']
  webpackConfig.resolve.modules = [
    path.resolve(__dirname, 'node_modules/gatsby/node_modules'), // for Gatsby's core-js@2
    'node_modules' // your modules w/ core-js@3
  ]
  params.actions.replaceWebpackConfig(webpackConfig)
}

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(queries.FullGuidesQuery)
  data.allPortwayDocument.edges.forEach((edge) => {
    const document = edge.node
    const slugger = new marked.Slugger()
    const slug = slugger.slug(document.name)
    actions.createPage({
      path: `/guides/${slug}`,
      component: require.resolve('./src/layouts/guides.js'),
      context: { guide: document, slug: slug }
    })
  })
}
