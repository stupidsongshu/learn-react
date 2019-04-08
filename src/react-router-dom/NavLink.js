import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

// const oddEvent = (match, location) => {
//   console.log('oddevent', match, location)
//   if (!match) {
//     return false
//   }
//   const eventId = parseInt(match.params.id)
//   console.log(eventId)
// }

const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  console.log(eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

export default class NavLinkDemo extends React.Component {
  render() {
    return (
      <Router>
        <div className="panel">
          <ul>
            <li>
              <NavLink
                exact
                strict
                to={{ pathname: '/navLink/123', search: '?a=b', hash: '#c' }}
                activeClassName="customActive"
                activeStyle={{
                  fontWeight: 'bold',
                  color: 'red'
                }}
                isActive={oddEvent}
              >NavLink</NavLink>
            </li>
          </ul>

          <Route path="/navLink/:id" render={() => (
            <div>NavLink content</div>
          )}></Route>
        </div>
      </Router>
    )
  }
}
