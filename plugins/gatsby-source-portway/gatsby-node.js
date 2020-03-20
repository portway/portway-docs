const fetch = require('node-fetch')

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }, configOptions) => {
  const { createNode } = actions

  async function fetchFromPortway(url) {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${configOptions.token}`
      }
    })
    return response.json()
  }

  async function fetchProject() {
    const response = await fetchFromPortway(`https://api.portway.app/api/v1/projects/${configOptions.projectId}/documents`)
    return response
  }

  async function fetchDocument(duid) {
    const response = await fetchFromPortway(`https://api.portway.app/api/v1/documents/${duid}`)
    return response
  }

  function processDocumentNode(document) {
    const nodeId = createNodeId(`portway-document-${document.id}`)
    const nodeData = {
      uid: document.id,
      name: document.name,
      content: document.fields,
      lastPublishedAt: document.lastPublishedAt,
      updatedAt: document.updatedAt,
      createdAt: document.createdAt,

      // Required fields
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: 'PortwayDocument',
        mediaType: 'application/json',
        contentDigest: createContentDigest(document.fields),
      }
    }
    return nodeData
  }

  const { data: documents } = await fetchProject()
  await Promise.all(
    documents.map((document) => {
      return fetchDocument(document.id).then((response) => {
        const { data: document } = response
        const processedDocument = processDocumentNode(document)
        createNode(processedDocument)
      })
    })
  )
}
