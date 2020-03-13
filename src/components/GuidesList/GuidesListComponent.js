import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { PATH_GUIDES } from '../../constants'

import './GuidesListStyles.scss'

const GuidesListComponent = ({ guides }) => {
  if (guides && guides.length) {
    return (
      <ol className="guides-list">
        {guides.map((guide) => {
          return (
            <li className="guides-list__item" key={guide.id}>
              <NavLink className="guides-list__link" to={`${PATH_GUIDES}/${guide.id}`}>{guide.name}</NavLink>
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
