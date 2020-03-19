import React from 'react'
import { useLocation } from 'react-router-dom'

import { PATH_API } from '../../constants'

const Footer = () => {
  const location = useLocation()
  const year = new Date().getFullYear()
  if (location.pathname !== PATH_API) {
    return (
      <footer className="footer">
        <p>
          Built using <a href="https://portway.app/" target="_blank" rel="noopener noreferrer">Portway</a>.
          Copyright © <a href="https://bonkeybong.com/" target="_blank" rel="noopener noreferrer">BonkeyBong, LLC</a> {year}</p>
      </footer>
    )
  }
  return null
}

export default Footer
