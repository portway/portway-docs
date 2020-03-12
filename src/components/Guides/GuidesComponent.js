import React from 'react'

import GuidesListContainer from '../GuidesList/GuidesListContainer'

const GuidesComponent = () => {
  return (
    <div className="guides-container">
      <nav>
        <GuidesListContainer />
      </nav>
      <h1>Guides</h1>
      <p>Coming soon...</p>
    </div>
  )
}

export default GuidesComponent
