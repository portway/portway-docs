/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/global.scss'

const sendPageView = () => {
  window._gs('track')
}

export const onRouteUpdate = ({ location, prevLocation }) => {
  // Manually track with GoSquared
  if (`requestAnimationFrame` in window) {
    requestAnimationFrame(() => {
      sendPageView()
    })
  } else {
    // simulate 2 rAF calls
    setTimeout(sendPageView, 32)
  }
}
