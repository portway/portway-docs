import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import marked from 'marked'

import { PATH_GUIDES } from '../../constants'

import Layout from '../layouts/layout'

export const query = graphql`
  {
    allPortwayDocument(filter: {content: {elemMatch: {name: {eq: "description"}}}}) {
      edges {
        node {
          uid
          name
          content {
            id
            name
            value
          }
        }
      }
    }
  }
`

const GuidesPage = ({ data }) => (
  <Layout className="guides" title="Guides">
    <h3>Guides</h3>
    <p>
      Looking for ideas on what to do with Portway? You’ve come to the right place! We’re
      working hard to add interesting guides to the site so you can see all the things and API
      can do with your notes app.
    </p>
    <ul className="card-list">
      {data.allPortwayDocument.edges.map((guide) => {
        const slugger = new marked.Slugger()
        const slug = slugger.slug(guide.node.name)
        return <li key={guide.node.uid} className="card-list__item">
          <Link className="card" to={`${PATH_GUIDES}/${slug}`}>
            {guide.node.name}
          </Link>
        </li>
      })}
    </ul>
  </Layout>
)

GuidesPage.propTypes = {
  data: PropTypes.object,
}

export default GuidesPage
