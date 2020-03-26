import React from 'react'

import './FooterStyles.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__copyright">
        <p>
          Portway &copy; {new Date().getFullYear()} <a href="https://bonkeybong.com/">BonkeyBong, LLC</a><br />
          Built using <a href="https://getportway.com/">Portway</a> &amp; <a href="https://gatsbyjs.org">Gatsby</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
