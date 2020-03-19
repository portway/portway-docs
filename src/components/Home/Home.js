import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { PATH_API, SITE_TITLE } from '../../constants'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home – {SITE_TITLE}</title>
      </Helmet>
      <article className="container home">
        <h1>Portway documentation</h1>
        <p>
          We’re working on guides, sample projects, and more. Are you a developer? Read the
          <Link to={PATH_API}>API docs</Link> and start seeing what you can do with the Portway API.
        </p>
        <section className="section">
          <h2>Recent guides</h2>
          <ul className="card-list">
            <li className="card-list__item">
              <a href="/guides/122/build-a-twitter-logger" className="card">
                <h3>Create a Twitter logger</h3>
                <p>
                  Give your applications life by letting them post to your documents for you. We
                  created a simple example using the Twitter API.
                </p>
              </a>
            </li>
            <li className="card-list__item">
              <a href="/guides/126/creating-an-ios-shortcut" className="card">
                <h3>Creating an iOS Shortcut</h3>
                <p>
                  Keep track of places you enjoy by building a simple Siri Shortcut to use with Portway
                </p>
              </a>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

Home.propTypes = {
}

export default Home
