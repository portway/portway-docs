import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GuidesListComponent from './GuidesListComponent'

const GuidesListContainer = () => {
  const data = useStaticQuery(graphql`
  {
    allPortwayDocument {
      edges {
        node {
          uid
          name
          slug
        }
      }
    }
  }
  `)
  return <GuidesListComponent guides={data.allPortwayDocument.edges} />
}

export default GuidesListContainer
