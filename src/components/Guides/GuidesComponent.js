import React from 'react'
import { Route } from 'react-router-dom'

import { PATH_GUIDES } from '../../constants'
import GuidesListContainer from '../GuidesList/GuidesListContainer'
import GuideContainer from '../Guide/GuideContainer'

import './GuideContainerStyles.scss'

const GuidesComponent = () => {
  return (
    <main className="guides-container">
      <nav className="guides-container__navigation" role="navigation">
        <div className="guides-container__nav-block">
          <h3>Guides</h3>
          <GuidesListContainer />
        </div>
      </nav>
      <div className="guides-container__main">
        <Route path={PATH_GUIDES} exact>
          <p>Learn how to make things with Portway.</p>
        </Route>
        <Route path={`${PATH_GUIDES}/:id`}>
          <GuideContainer />
        </Route>
      </div>
    </main>
  )
}

export default GuidesComponent
