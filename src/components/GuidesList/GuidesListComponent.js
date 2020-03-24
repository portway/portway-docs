import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import marked from 'marked'

import { PATH_GUIDES } from '../../../constants'
import './GuidesListStyles.scss'

const GuidesListComponent = ({ guides }) => {
  if (guides && guides.length) {
    return (
      <ol className="guides-list">
        {guides.map((node) => {
          const guide = node.node
          const slugger = new marked.Slugger()
          const title = slugger.slug(guide.name)
          return (
            <li className="guides-list__item" key={guide.uid}>
              <Link
                activeClassName="active"
                className="guides-list__link"
                to={`${PATH_GUIDES}/${title}`}
              >
                {guide.name}
              </Link>
            </li>
          )
        })}
      </ol>
    )
  }
  return <>Loading guides...</>
}

GuidesListComponent.propTypes = {
  guides: PropTypes.array,
}

export default GuidesListComponent
