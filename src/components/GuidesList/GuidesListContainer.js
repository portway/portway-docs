import React, { useEffect, useState } from 'react'

import { fetchGuides } from '../../api'
import GuidesListComponent from './GuidesListComponent'

const GuidesListContainer = () => {
  const [guidesList, setGuidesList] = useState(null)
  useEffect(() => {
    if (guidesList === null) {
      fetchGuides().then((response) => {
        setGuidesList(response.data)
      })
    }
  })
  return <GuidesListComponent guides={guidesList} />
}

export default GuidesListContainer
