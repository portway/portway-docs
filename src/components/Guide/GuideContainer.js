import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import GuideComponent from './GuideComponent'

async function fetchGuide(id) {
  const response = await fetch(`/api/guide/${id}`, {
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.json()
}

const GuideContainer = () => {
  const [guide, setGuide] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    if (guide === null || guide.id !== Number(id)) {
      fetchGuide(id).then((response) => {
        setGuide(response.data)
      })
    }
  }, [guide, id])

  return (
    <GuideComponent guide={guide} />
  )
}

export default GuideContainer