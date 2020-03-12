import React, { useEffect, useState } from 'react'

import GuidesListComponent from './GuidesListComponent'

async function fetchGuides() {
  const response = await fetch('/api/guides')
  return response.json()
}

const GuidesListContainer = () => {
  const [guidesList, setGuidesList] = useState(null)
  useEffect(() => {
    if (guidesList === null) {
      fetchGuides().then((response) => { setGuidesList(response.data) })
    }
  })
  return <GuidesListComponent guides={guidesList} />
}

export default GuidesListContainer
