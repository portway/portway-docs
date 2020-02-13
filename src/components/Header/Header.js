import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import { PATH_APP, PATH_API, PATH_GUIDES } from '../../constants'
import logo from '../../images/logo-horizontal.svg'

import './Header.scss'

const Header = () => {
  return (
    <header className="masthead" role="banner">
      <div className="header">
        <Link to="/" aria-label="Documentation home" name="home">
          <img className="navbar__logo" src={logo} alt="Portway logo" width="161" height="40" />
        </Link>
        <nav className="navigation" role="navigation" aria-label="Main navigation">
          <ul id="menu" className="menu">
            <li><NavLink to={PATH_GUIDES}><span>Guides</span></NavLink></li>
            <li><NavLink to={PATH_API}><span>API</span></NavLink></li>
          </ul>
        </nav>
        <div id="info" className="masthead__info">
          <a className="btn" href={PATH_APP}>Log in</a>
        </div>
      </div>
    </header>
  )
}

export default Header
