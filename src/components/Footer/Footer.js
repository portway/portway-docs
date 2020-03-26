import React from 'react'

import './FooterStyles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      Portway &copy; {new Date().getFullYear()} BonkeyBong, LLC
    </footer>
  )
}

export default Footer
