import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { PATH_GUIDES } from '../../constants'
import SEO from '../components/seo'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import GuideComponent from '../components/Guide/GuideComponent'
import GuidesListContainer from '../components/GuidesList/GuidesListContainer'

import './guidesStyles.scss'

const GuidesLayout = ({ location, pageContext }) => {
  const guideDescription = pageContext.guide.content.filter((field) => {
    return field.name === 'description'
  })
  const guideSocialImage = pageContext.guide.content.filter((field) => {
    return field.name === 'social-image'
  })
  return (
    <div className="document">
      <SEO
        description={guideDescription[0] && guideDescription[0].value}
        location={location}
        socialImage={guideSocialImage[0] && guideSocialImage[0].value}
        title={pageContext.guide.name}
      />
      <Header />
      <main className="guides-container">
        <nav className="guides-container__navigation" role="navigation">
          <div className="guides-container__nav-block">
            <h3><Link to={PATH_GUIDES}>Guides</Link></h3>
            <GuidesListContainer />
          </div>
        </nav>
        <div className="guides-container__main">
          <GuideComponent guide={pageContext.guide} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

GuidesLayout.propTypes = {
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export default GuidesLayout
