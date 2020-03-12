const fetch = require('node-fetch')
const memcache = require('memory-cache')

const GUIDES_PROJECT_ID = 44
const GUIDES_CACHE = 3.6e+6 // one hour

async function fetchFromPortway(url) {
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsIm9yZ0lkIjoxLCJpYXQiOjE1ODM5NjM0MDUsImlzcyI6ImJvbmtleWJvbmcifQ.WWFbAZzUAQWqBmMQz5o8jqChI_sJ5vLqgtqSAMEoU40'
    }
  })
  return response.json()
}

module.exports = {
  // Fetch the guides and create a guides json
  fetchGuides: async () => {
    const response = await fetchFromPortway(`https://api.portway.app/api/v1/projects/${GUIDES_PROJECT_ID}/documents`)
    memcache.put('guidesList', JSON.stringify(response.data), GUIDES_CACHE)
    return response.data
  },

  // Fetch a single guide, and generate the the JSON file if it doesn't exist
  fetchGuide: async (guid) => {
    const response = await fetchFromPortway(`https://api.portway.app/api/v1/documents/${guid}`)
    memcache.put(guid, JSON.stringify(response.data), GUIDES_CACHE)
    return response.data
  }
}
