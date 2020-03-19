import React from 'react'
import PropTypes from 'prop-types'

const NotFound = ({ optionalMessage }) => {
  return (
    <div className="container">
      <h1>Not found</h1>
      <p>{optionalMessage ? optionalMessage : 'Sorry, that doesn‘t appear to exist'}</p>
      <p>
        If you think that’s an error on our part, please <a href="mailto:support@portway.app?subject=Missing link">let us know</a>! Otherwise, try
        starting from the <a href="/">homepage</a>.
      </p>
    </div>
  )
}

NotFound.propTypes = {
  optionalMessage: PropTypes.string,
}

export default NotFound
