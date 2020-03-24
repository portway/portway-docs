
// Only guides with the descrition field
// Only enough data for lists
module.exports = {
  GuidesListWithDescriptions: `
    query GuidesWithDescriptions {
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
  `,

  // All guides, with the full document
  FullGuidesQuery: `
    query FullGuidesQuery {
      allPortwayDocument {
        edges {
          node {
            uid
            name
            content {
              id
              name
              structuredValue {
                type
                tag
                children {
                  data
                }
              }
              type
              value
            }
          }
        }
      }
    }
  `
}
