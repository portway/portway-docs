import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import marked from 'marked'

import { PATH_GUIDES, SITE_TITLE } from '../../constants'
import './GuidesHomepageStyles.scss'

const GuidesHomepage = ({ guides }) => {
  const slugger = new marked.Slugger()
  return (
    <>
      <Helmet>
        <title>Guides – {SITE_TITLE}</title>
      </Helmet>
      <article className="guide__homepage">
        <h3>Guides</h3>
        <p>
          Looking for ideas on what to do with Portway? You’ve come to the right place! We’re
          working hard to add interesting guides to the site so you can see all the things and API
          can do with your notes app.
        </p>
        <ul className="card-list">
          {guides && guides.map((guide) => {
            return (
              <li key={guide.id} className="card-list__item">
                <Link className="card" to={`${PATH_GUIDES}/${guide.id}/${slugger.slug(guide.name)}`}>
                  {guide.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </article>
    </>
  )
}

GuidesHomepage.propTypes = {
  guides: PropTypes.array,
}

export default GuidesHomepage
