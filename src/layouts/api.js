import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SEO from '../components/seo'
import Header from '../components/Header/Header'

const APILayout = ({ children, className, title }) => {
  const layoutClasses = cx({
    'container': false,
    [className]: className
  })
  return (
    <>
      <SEO title={title} />
      <Header />
      <main className={layoutClasses}>
        {children}
      </main>
    </>
  )
}

APILayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
}

APILayout.defaultProps = {
  title: 'API'
}

export default APILayout
