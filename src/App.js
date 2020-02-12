import React from 'react'
import { RedocStandalone } from 'redoc'
import './App.css'

function App() {
  return (
    <div className="App">
      <RedocStandalone specUrl={`${process.env.PUBLIC_URL}/docs/openapi.yml`} />
    </div>
  )
}

export default App
