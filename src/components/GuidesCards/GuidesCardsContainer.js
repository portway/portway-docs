import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GuidesCardsComponent from './GuidesCardsComponent'

const GuidesCardsContainer = () => {
  const data = useStaticQuery(graphql`
  {
    allPortwayDocument(filter: {content: {elemMatch: {name: {eq: "description"}}}}) {
      edges {
        node {
          uid
          name
          content {
            id
            name
            value
          }
        }
      }
    }
  }
  `)
  return <GuidesCardsComponent guides={data.allPortwayDocument.edges} />
}

export default GuidesCardsContainer
