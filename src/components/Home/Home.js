import React from 'react'
import { Link } from 'react-router-dom'

import { PATH_API } from '../../constants'

const Home = () => {
  return (
    <div className="container">
      <h1>Portway documentation</h1>
      <p>
        We’re working on guides, sample projects, and more. But right now you can take a look at
        the <Link to={PATH_API}>API</Link>
      </p>
    </div>
  )
}

Home.propTypes = {
}

export default Home
