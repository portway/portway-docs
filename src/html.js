import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="robots" content="all" />
        <meta name="author" content="BonkeyϟBong, LLC" />
        <meta name="theme-color" content="#F2F2F2" />
        {props.headComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(g,s,q,r,d){r=g[r]=g[r]||function(){(r.q=r.q||[]).push(
              arguments)};d=s.createElement(q);q=s.getElementsByTagName(q)[0];
              d.src='//d1l6p2sc9645hc.cloudfront.net/tracker.js';q.parentNode.
              insertBefore(d,q)}(window,document,'script','_gs');
              _gs('GSN-132977-E');
              _gs('set', 'anonymizeIP', true);
            `,
          }} />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
