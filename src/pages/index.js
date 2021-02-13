import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { PATH_API, SUPPORT_EMAIL } from '../../constants'

import Layout from '../layouts/layout'
import GuidesCardsContainer from '../components/GuidesCards/GuidesCardsContainer'

const IndexPage = ({ location }) => (
  <Layout className="home" title="Portway Documentation" location={location}>
    <h1>Portway Documentation</h1>
    <p>
      Welcome to the developer documentation website for <b><a href="https://getportway.com/">Portway</a></b>.
    </p>
    <p>
      We’re working on guides, sample projects, and more. Are you a developer? Read the{` `}
      <Link to={PATH_API}>API docs</Link> and start seeing what you can do with the Portway API.
    </p>
    <p>Have an idea for a guide? <a href={`mailto:${SUPPORT_EMAIL}`}>drop us a line!</a></p>
    <section className="section">
      <h2>Recent guides</h2>
      <GuidesCardsContainer />
    </section>
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
}

export default IndexPage
