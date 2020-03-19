import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { PATH_API, PATH_GUIDES } from '../../constants'
import Header from '../Header/Header'
import Redoc from '../Redoc/Redoc'
import Home from '../Home/Home'
import GuidesContainer from '../Guides/GuidesContainer'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import NotFound from '../NotFound/NotFound'

import './App.scss'

export default function App() {
  return (
    <Router>
      <Header />
      <ErrorBoundary>
        <Switch>
          <Route path={PATH_API}>
            <Redoc />
          </Route>
          <Route path={PATH_GUIDES}>
            <GuidesContainer />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </ErrorBoundary>
    </Router>
  )
}

