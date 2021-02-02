import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Link } from 'gatsby'

import { PATH_GUIDES } from '../../../constants'
import ArrowImage from '../../images/arrow-right.svg'

const GuidesCardsComponent = ({ guides }) => {
  return (
    <ul className="card-list">
      {guides && guides.map((guide) => {
        const cardImage = guide.node.childrenPortwayField.find(field => field.name === 'card-image')
        const cardColor = guide.node.childrenPortwayField.find(field => field.name === 'card-color')
        const description = guide.node.childrenPortwayField.find(field => field.name === 'description')
        const difficulty = guide.node.childrenPortwayField.find(field => field.name === 'difficulty')
        const difficultyClasses = cx({
          'difficulty__value': true,
          'difficulty__value--easy': difficulty && difficulty.value.toLowerCase() === 'easy',
          'difficulty__value--intermediate': difficulty && difficulty.value.toLowerCase() === 'intermediate',
          'difficulty__value--expert': difficulty && difficulty.value.toLowerCase() === 'expert',
        })
        const cardImageStyles = {
          backgroundColor: cardColor.value,
        }
        return <li key={guide.node.uid} className="card-list__item">
          <Link className="card" to={`${PATH_GUIDES}/${guide.node.slug}`}>
            <div className="card__image" style={cardImageStyles}>
              <img src={cardImage.value} width="320" height="198" alt={cardImage.name} />
            </div>
            <div className="card__content">
              <h3>{guide.node.name}</h3>
              {description &&
              <p className="description">{description.value}</p>
              }
            </div>
            <div className="card__meta">
              {difficulty &&
              <div className="card__difficulty">
                <span className="difficulty__label">Difficulty:</span>
                <span className={difficultyClasses}>{difficulty.value}</span>
              </div>
              }
              <span className="card_arrow">
                <img src={ArrowImage} width="14" height="14" alt="Right arrow" />
              </span>
            </div>
          </Link>
        </li>
      })}
    </ul>
  )
}

GuidesCardsComponent.propTypes = {
  guides: PropTypes.array,
}

export default GuidesCardsComponent
