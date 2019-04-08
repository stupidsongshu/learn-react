import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function About() {
  return <h2>About</h2>
}
function Company() {
  return <h2>Company</h2>
}
function User({ match }) {
  return <h2>User: {match.params.user}</h2>
}

function AmbiguousMatches() {
  return (
    <Router>
      <div className="panel">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/userA">UserA</Link>
          </li>
          <li>
            <Link to="/userB">UserB</Link>
          </li>
        </ul>

        {/* <Route path="/about" component={About} />
        <Route path="/company" component={Company} />
        <Route path="/:user" component={User} /> */}

        {/* Sometimes you want to have a whitelist of static paths
        like "/about" and "/company" but also allow for dynamic
        patterns like "/:user". The problem is that "/about"
        is ambiguous and will match both "/about" and "/:user".
        Most routers have an algorithm to decide for you what
        it will match since they only allow you to match one
        "route". React Router lets you match in multiple places
        on purpose (sidebars, breadcrumbs, etc). So, when you
        want to clear up any ambiguous matching, and not match
        "/about" to "/:user", just wrap your <Route>s in a
        <Switch>. It will render the first one that matches. */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/company" component={Company} />
          <Route path="/:user" component={User} />
        </Switch>
      </div>
    </Router>
  )
}

export default AmbiguousMatches
