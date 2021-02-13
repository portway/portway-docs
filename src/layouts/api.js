import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SEO from '../components/seo'
import Header from '../components/Header/Header'

const APILayout = ({ children, className, description, location, title }) => {
  const layoutClasses = cx({
    'container': true,
    [className]: className
  })
  return (
    <div className="document">
      <SEO title={title} description={description} location={location} />
      <Header />
      <main className={layoutClasses}>
        {children}
      </main>
    </div>
  )
}

APILayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
}

APILayout.defaultProps = {
  title: 'API'
}

export default APILayout
