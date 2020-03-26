/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaTitle = title || site.siteMetadata.title
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet htmlAttributes={{ lang }} title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <meta charset="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
      <meta name="keywords" content="Notes, Markdown, API, REST, CMS, Content management system, Developers" />
      <meta name="robots" content="all" />
      <meta name="author" content="BonkeyϟBong, LLC" />
      <meta name="theme-color" content="#F2F2F2" />

      {/* <!-- twitter --> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@portwayapp" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://docs.portway.app/social/social_800.png" />
      <meta name="twitter:image:alt" content="Portway Logo Mark" />

      {/* <!-- generic social graph --> */}
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content="https://docs.portway.app/" />
      <meta property="og:image" content="https://docs.portway.app/social/social_1200.png" />
      <meta property="og:image:alt" content="Portway Logo Mark with pattern" />

      {/* <!-- apple/opera images --> */}
      <link rel="icon" type="image/png" href="https://docs.portway.app/social/speed-dial_160.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://docs.portway.app/social/favicon_32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://docs.portway.app/social/favicon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://docs.portway.app/social/apple-touch-icon_180.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="https://docs.portway.app/social/apple-touch-icon_114.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="https://docs.portway.app/social/apple-touch-icon_72.png" />
      <link rel="apple-touch-icon" href="https://docs.portway.app/social/apple-touch-icon_57.png" />
      <link rel="mask-icon" href="https://docs.portway.app/social/mask-icon.svg" color="black" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
