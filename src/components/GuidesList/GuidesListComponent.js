import React from 'react'
import PropTypes from 'prop-types'

const GuidesListComponent = ({ guides }) => {
  if (guides && guides.length) {
    return (
      <ol>
        {guides.map((guide) => {
          return <li key={guide.id}>{guide.name}</li>
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
