
// Only guides with the descrition field
// Only enough data for lists
module.exports = {
  GuidesListWithDescriptions: `
    query GuidesWithDescriptions {
      allPortwayDocument(filter: {childrenPortwayField: {elemMatch: {name: {eq: "description"}}}}) {
        edges {
          node {
            id
            name
            slug
            uid
            childrenPortwayField {
              id
              name
              value
            }
          }
        }
      }
    }
  `,

  // All guides, with the full document
  FullGuidesQuery: `
    query FullGuidesQuery {
      allPortwayDocument {
        nodes {
          id
          name
          slug
          uid
          children {
            id
            ... on PortwayField {
              id
              name
              order
              value
              documentId
              structuredValue {
                tag
                type
                children {
                  data
                }
              }
              type
              uid
            }
          }
        }
      }
    }
  `
}
