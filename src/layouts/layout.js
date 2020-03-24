import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import { SITE_TITLE } from '../../constants'
import SEO from '../components/seo'
import Header from '../components/Header/Header'

const Layout = ({ children, className, title }) => {
  const layoutClasses = cx({
    'container': true,
    [className]: className
  })
  return (
    <>
      <SEO title={`${title} – ${SITE_TITLE}`} />
      <Header />
      <main className={layoutClasses}>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Home'
}

export default Layout
