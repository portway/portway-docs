import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import { PATH_GUIDES } from '../../constants'
import GuidesListContainer from '../GuidesList/GuidesListContainer'
import GuideContainer from '../Guide/GuideContainer'
import GuidesHomepage from './GuidesHomepage'

import './GuideContainerStyles.scss'

const GuidesComponent = ({ guides }) => {
  return (
    <main className="guides-container">
      <Route path={PATH_GUIDES} exact>
        <GuidesHomepage guides={guides} />
      </Route>
      <Route path={`${PATH_GUIDES}/:id/:slug`}>
        <nav className="guides-container__navigation" role="navigation">
          <div className="guides-container__nav-block">
            <h3>Guides</h3>
            <GuidesListContainer />
          </div>
        </nav>
        <div className="guides-container__main">
          <GuideContainer />
        </div>
      </Route>
    </main>
  )
}

GuidesComponent.propTypes = {
  guides: PropTypes.array,
}

export default GuidesComponent
