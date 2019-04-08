import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index() {
  return <h2>Index</h2>
}
function About() {
  return <h2>About</h2>
}

function User({ match, location, history }) {
  return (
    <div>
      <div className="panel">
        <p>match: {JSON.stringify(match)}</p>
        <p>location: {JSON.stringify(location)}</p>
        <p>history: {JSON.stringify(history)}</p>
      </div>
      <h3>Requested Param: {match.params.id}</h3>
    </div>
  )
}
function Users({ match }) {
  return (
    <div>
      <h2>User</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>

        <Route path={`${match.path}/:id`} component={User}></Route>
        <Route exact path={match.path} render={() => <h3>Please select an user.</h3>}></Route>
        <Route component={Always}></Route>
      </ul>
    </div>
  )
}

function Always() {
  return <h3>This is always be matched.</h3>
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Index</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  )
}

function ComponentWithRegexp({match}) {
  return <h3>Only asc/desc are allowed: {match.params.direction}</h3>
}

function ReactRouterDOM() {
  return (
    <Router>
      <div className="panel">
        <Header />
        <hr />

        <Route path="/" component={Index} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/users" component={Users}></Route>

        {/* It's possible to use regular expressions to control what param values should be matched.
          * "/order/asc"  - matched
          * "/order/desc" - matched
          * "/order/foo"  - not matched */}
        <Route path='/order/:direction(asc|desc)' component={ComponentWithRegexp}></Route>
      </div>
    </Router>
  )
}

export default ReactRouterDOM
