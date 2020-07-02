import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import SEO from '../components/seo'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Layout = ({ children, className, description, location, title }) => {
  const layoutClasses = cx({
    'container': true,
    [className]: className
  })
  return (
    <div className="document">
      <SEO
        title={title}
        description={description}
        location={location}
      />
      <Header />
      <main className={layoutClasses}>
        {children}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  description: PropTypes.string,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: 'Home'
}

export default Layout
