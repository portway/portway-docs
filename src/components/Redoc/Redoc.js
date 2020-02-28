import React from 'react'
import { RedocStandalone } from 'redoc'

import './RedocOverride.scss'

const Redoc = () => {
  const redocOptions = {
    disableSearch: true,
    hideDownloadButton: true,
    // hideLoading: true,
    nativeScrollbars: true,
    pathInMiddlePanel: true,
    requiredPropsFirst: true,
    scrollYOffset: 71,
    sortPropsAlphabetically: true,
  }
  // Theme
  // https://github.com/Redocly/redoc/blob/master/src/theme.ts
  const theme = {
    tonalOffset: 0.5,
    colors: {
      primary: {
        main: 'hsl(17, 93%, 65%)'
      },
      success: {
        main: 'hsl(117, 49%, 59%)'
      },
      warning: {
        main: 'hsl(34, 98%, 64%)'
      },
      error: {
        main: 'hsl(357, 89%, 66%)'
      },
      text: {
        main: 'hsl(0, 0%, 20%)'
      },
      border: {
        light: 'hsl(0, 0%, 90%)',
        dark: 'hsl(218, 7%, 24%)'
      },
      http: {
        get: 'hsl(117, 49%, 59%)', // green
        post: 'hsl(34, 98%, 64%)', // orange
        put: 'hsl(230, 59%, 61%)', // blue
        options: '#d3ca12',
        patch: '#e09d43',
        delete: 'hsl(357, 89%, 66%)', // red
        basic: 'hsl(0, 0%, 50%)', // gray-50
        link: 'hsl(190, 79%, 69%)', // cyan
        head: '#c167e4',
      },
    },
    typography: {
      fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
      fontSize: '1.7rem',
      letterSpacing: '-0.2px',
      lineHeight: '2.7rem',
      headings: {
        fontWeight: 400,
        lineHeight: '3.4em',
      }
    },
    menu: {
      backgroundColor: 'hsl(0, 0%, 97%)',
    },
    rightPanel: {
      // backgroundColor: 'hsl(0, 0%, 94%)',
      // textColor: 'hsl(0, 0%, 20%)',
    }
  }
  return (
    <RedocStandalone
      options={{
        ...redocOptions,
        theme: theme
      }}
      specUrl={`${process.env.PUBLIC_URL}/spec/openapi.yml`}
    />
  )
}

export default Redoc
