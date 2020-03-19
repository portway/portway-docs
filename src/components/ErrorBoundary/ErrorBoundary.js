import React from 'react'
import PropTypes from 'prop-types'

import { SUPPORT_EMAIL, SUPPORT_LINK } from '../../constants'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // @todo if we implement an error log endpoint
    // logErrorToMyService(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <section className="container error-boundary">
          <h1>Something went wrong</h1>
          <p>Try reloading, or contact support.</p>
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> <a href={SUPPORT_LINK}>{SUPPORT_LINK}</a>
        </section>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
}

export default ErrorBoundary
