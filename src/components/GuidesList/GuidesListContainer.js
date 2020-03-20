import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GuidesListComponent from './GuidesListComponent'

const GuidesListContainer = () => {
  const data = useStaticQuery(graphql`
    query GuidesListQuery {
      allPortwayDocument {
        edges {
          node {
            uid
            name
          }
        }
      }
    }
  `)
  return <GuidesListComponent guides={data.allPortwayDocument.edges} />
}

export default GuidesListContainer
