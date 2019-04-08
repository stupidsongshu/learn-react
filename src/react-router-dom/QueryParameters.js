import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Child() {
  const params = new URLSearchParams(window.location.search)
  const name = params.get('name')
  return (
    <Route
      render={_ => (
        name ? (
          <p>The <code>name</code> in the query string is "{name}"</p>
        ) : <p>There is no name in the query string</p>
      )}
    />
  )
}

function getConfirmation(message, callback) {
  const val = window.confirm(message)
  callback(val)
}

const linkInnerRefCallback = node => {
  console.log('Link innerRef callback-----', node)
}

const anchorRef = React.createRef()

class QueryParameters extends React.Component {
  componentDidMount() {
    console.log('anchorRef callback-----', anchorRef.current)
  }
  render() {
    const supportsHistory = 'pushState' in window.history
    return (
      <Router basename="/base" forceRefresh={!supportsHistory} getUserConfirmation={getConfirmation}>
        <div>
          <ul>
            <li>
              <Link to={{pathname: '/fe', search: '?name=html', hash: '#abc'}}>HTML</Link>
            </li>
            <li>
              <Link to={{pathname: '/fe', search: '?name=css'}} replace innerRef={linkInnerRefCallback}>CSS</Link>
            </li>
            <li>
              <Link to={{pathname: '/fe', search: '?name=js', state: { from: 'baidu' }}} ref={anchorRef}>JS</Link>
            </li>
          </ul>

          <Route component={Child} />
        </div>
      </Router>
    )
  }
}

export default QueryParameters
