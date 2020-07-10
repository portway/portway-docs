import React from 'react'
import PropTypes from 'prop-types'

import APILayout from '../layouts/api'
import Redoc from '../components/Redoc/Redoc'

const APIPage = ({ location }) => (
  <APILayout className="api" title="API" description="The Portway API spec" location={location}>
    <Redoc />
  </APILayout>
)

APIPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
}

export default APIPage
