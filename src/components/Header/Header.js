import React from 'react'
import { Link } from 'gatsby'

import { PATH_APP, PATH_API, PATH_GUIDES, PATH_SIGNUP, PATH_WEBSITE } from '../../../constants'
import logo from '../../images/logo-horizontal.svg'

import './Header.scss'

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header__container">
        <a href={PATH_WEBSITE} className="header__logo" aria-label="Return to Portway marketing website">
          <img src={logo} alt="Portway logo" width="161" height="40" />
        </a>
        <span className="header__home">
          | <Link to="/" className="text-link" aria-label="Documentation home" name="home">Docs</Link>
        </span>
        <nav className="header__navigation" role="navigation" aria-label="Main navigation">
          <ul id="menu" className="header__menu">
            <li><Link activeClassName="active" className="text-link" to="/"><span>Home</span></Link></li>
            <li><Link activeClassName="active" className="text-link" to={PATH_GUIDES}><span>Guides</span></Link></li>
            <li><Link activeClassName="active" className="text-link" to={PATH_API}><span>API</span></Link></li>
          </ul>
        </nav>
        <div id="info" className="header__info">
          <a className="text-link" href={PATH_APP}>Log in</a>
          <a className="btn"href={PATH_SIGNUP}>Sign up</a>
        </div>
      </div>
    </header>
  )
}

export default Header
