import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { PATH_GUIDES } from '../../../constants'
import './GuidesListStyles.scss'

const GuidesListComponent = ({ guides }) => {
  if (guides && guides.length) {
    return (
      <ol className="guides-list">
        {guides.map((guide) => {
          const g = guide.node
          return (
            <li className="guides-list__item" key={g.uid}>
              <Link
                activeClassName="active"
                className="guides-list__link"
                getProps={({ isPartiallyCurrent }) => ({
                  style: {
                    color: isPartiallyCurrent ? 'var(--color-blue-light)' : 'var(--color-gray-50)',
                    fontWeight: isPartiallyCurrent ? 500 : 'normal'
                  }
                })}
                to={`${PATH_GUIDES}/${g.slug}`}
              >
                {g.name}
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
