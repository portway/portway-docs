import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import marked from 'marked'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import { PATH_API, PATH_GUIDES } from '../../constants'

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

const IndexPage = ({ data }) => (
  <Layout className="home" title="Home">
    <h1>Portway documentation</h1>
    <p>
      We’re working on guides, sample projects, and more. Are you a developer? Read the{` `}
      <Link to={PATH_API}>API docs</Link> and start seeing what you can do with the Portway API.
    </p>
    <section className="section">
      <h2>Recent guides</h2>
      <ul className="card-list">
        {data.allPortwayDocument.edges.map((guide) => {
          const slugger = new marked.Slugger()
          const slug = slugger.slug(guide.node.name)
          const description = guide.node.content.find(field => field.name === 'description')
          const difficulty = guide.node.content.find(field => field.name === 'difficulty')
          const difficultyClasses = cx({
            'difficulty__value': true,
            'difficulty__value--easy': difficulty && difficulty.value.toLowerCase() === 'easy',
            'difficulty__value--intermediate': difficulty && difficulty.value.toLowerCase() === 'intermediate',
            'difficulty__value--expert': difficulty && difficulty.value.toLowerCase() === 'expert',
          })
          return <li key={guide.node.uid} className="card-list__item">
            <Link className="card" to={`${PATH_GUIDES}/${slug}`}>
              <h3>{guide.node.name}</h3>
              {description &&
              <p className="description">{description.value}</p>
              }
              {difficulty &&
              <div className="card__meta">
                <span className="difficulty__label">Difficulty:</span>
                <span className={difficultyClasses}>{difficulty.value}</span>
              </div>
              }
            </Link>
          </li>
        })}
      </ul>
    </section>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage
