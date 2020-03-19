import React, { useEffect, useState } from 'react'

import { fetchGuides } from '../../api'
import GuidesComponent from './GuidesComponent'

const GuidesContainer = () => {
  const [guidesList, setGuidesList] = useState(null)
  useEffect(() => {
    if (guidesList === null) {
      fetchGuides().then((response) => {
        setGuidesList(response.data)
      })
    }
  })
  return <GuidesComponent guides={guidesList} />
}

export default GuidesContainer
