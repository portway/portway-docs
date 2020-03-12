import React from 'react'
import { Route } from 'react-router-dom'

import { PATH_GUIDES } from '../../constants'
import GuidesListContainer from '../GuidesList/GuidesListContainer'
import GuideContainer from '../Guide/GuideContainer'

import './GuideStyles.scss'

const GuidesComponent = () => {
  return (
    <div className="guides-container">
      <nav className="guides-container__navigation" role="navigation">
        <h3>Guides</h3>
        <GuidesListContainer />
      </nav>
      <main className="guides-container__main">
        <Route path={PATH_GUIDES} exact>
          <p>Learn how to make things with Portway.</p>
        </Route>
        <Route path={`${PATH_GUIDES}/:id`}>
          <GuideContainer />
        </Route>
      </main>
    </div>
  )
}

export default GuidesComponent
