import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

import './GuideStyles.scss'

const GuideComponent = ({ guide }) => {
  return (
    <div className="guide">
      {guide &&
        <div className="guide__content">
          <h1>{guide.name}</h1>
          {guide.fields.map((field) => {
            switch (field.type) {
              case 2:
                return <div key={field.id} dangerouslySetInnerHTML={{ __html: marked(field.value) }} />
              default:
                return null
            }
          })}
        </div>
      }
    </div>
  )
}

GuideComponent.propTypes = {
  guide: PropTypes.object,
}

export default GuideComponent
