import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { SITE_NAME } from '../../constants'
import NotFound from '../NotFound/NotFound'
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
  const [hasError, setError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    if (guide === null || guide.id !== Number(id)) {
      fetchGuide(id).then((response) => {
        if (response.error) {
          setError(true)
          return
        }
        setGuide(response.data)
      })
    }
  }, [guide, id])

  return (
    <>
      <Helmet>
        <title>{`${guide && guide.name} – ${SITE_NAME}`}</title>
      </Helmet>
      {hasError &&
        <NotFound optionalMessage="Sorry, that guide doesn’t exist" />
      }
      {!hasError &&
      <GuideComponent guide={guide} />
      }
    </>
  )
}

export default GuideContainer
