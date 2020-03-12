import React, { useEffect, useRef, useState, createRef } from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

import './GuideStyles.scss'

const slugger = new marked.Slugger()
const HEADING_TAGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

function parseTitlesForToc(structuredValue) {
  const result = []
  structuredValue.forEach((item) => {
    if (HEADING_TAGS.includes(item.tag)) {
      result.push(item)
    }
  })
  return result
}

const GuideComponent = ({ guide }) => {
  const [tableOfContents, setTableOfContents] = useState([])
  const tocBlockRef = useRef()
  const tocItemsRef = useRef([])
  const tocActiveItemRef = useRef(null)
  const tickingRef = useRef(false)

  // window values
  const trackLength = useRef()

  function highlightTocItem(hId) {
    if (tocActiveItemRef.current !== hId) {
      tocActiveItemRef.current = hId
      tocItemsRef.current.forEach(item => item.ref.current.classList.remove('active'))
      try {
        const itemToHighlight = tocBlockRef.current.querySelector(`[data-id="${hId}"]`)
        if (itemToHighlight) {
          itemToHighlight.classList.add('active')
        }
      } catch (err) {
        console.error(err)
      }
    }
  }

  // SEt up window scroll values
  useEffect(() => {
    const windowHeight = window.innerHeight
    const documentHeight = document.body.offsetHeight
    trackLength.current = documentHeight - windowHeight
  }, [tableOfContents.length])

  // Set up the table of contents
  useEffect(() => {
    if (guide) {
      // Create the table of contents
      let tocArray = []
      guide.fields.forEach((field) => {
        const fieldHeadings = parseTitlesForToc(field.structuredValue)
        tocArray = [...tocArray, ...fieldHeadings]
      })
      tocArray.forEach((title, i) => {
        tocItemsRef.current.push(
          <li
            data-id={slugger.slug(title.children[0].data)}
            className={`guide__toc-item guide__toc-item--${title.tag}`}
            key={i}
            ref={createRef()}
          >
            {title.children[0].data}
          </li>
        )
      })
      setTableOfContents(tocArray)
    }
  }, [guide])

  // Set up the intersectionObserver
  useEffect(() => {
    let scrollHandler = function() {}
    if (tableOfContents.length > 0) {
      const headings = document.querySelectorAll('.guide__content h2')
      scrollHandler = (e) => {
        // Throttle this scroll event
        if (!tickingRef.current) {
          window.requestAnimationFrame(() => {
            const percentScrolled = Math.floor(document.documentElement.scrollTop / trackLength.current * 100)
            headings.forEach((heading) => {
              const topValue = heading.getBoundingClientRect().top
              const bottomValue = window.innerHeight - heading.getBoundingClientRect().bottom
              if (percentScrolled <= 50 && topValue < 150 && topValue > 0) {
                highlightTocItem(heading.getAttribute('id'))
              } else if (percentScrolled >= 50 && bottomValue > 150 && bottomValue < 1000) {
                highlightTocItem(heading.getAttribute('id'))
              }
            })
            tickingRef.current = false
          })
          tickingRef.current = true
        }
      }
      document.addEventListener('scroll', scrollHandler, { passive: true })
    }
    return () => {
      document.removeEventListener('scroll', scrollHandler, { passive: true })
    }
  }, [tableOfContents.length])

  return (
    <>
      <article className="guide__content">
        {guide &&
        <h1>{guide.name}</h1>
        }
        {guide && guide.fields.map((field) => {
          switch (field.type) {
            case 2:
              const renderedMarkdown = marked(field.value, {
                gfm: true,
              })
              return <div key={field.id} dangerouslySetInnerHTML={{ __html: renderedMarkdown }} />
            default:
              return null
          }
        })}
      </article>
      <aside className="guide__toc">
        <div className="guide__toc-block">
          <h3>In this guide...</h3>
          <ol className="guide__toc-list" ref={tocBlockRef}>
            {tableOfContents.length > 0 && tocItemsRef.current.length > 0 && tocItemsRef.current}
          </ol>
        </div>
      </aside>
    </>
  )
}

GuideComponent.propTypes = {
  guide: PropTypes.object,
}

export default GuideComponent
