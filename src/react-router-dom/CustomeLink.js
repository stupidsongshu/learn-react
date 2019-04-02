import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Home() {
  return <h2>Home</h2>
}
function About() {
  return <h2>About</h2>
}
function OldSchoolMenuLink({ activeOnlyWhenExact, to, label }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => (
        <div className={match ? 'active' : ''}>
          {match ? '>' : ''}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  )
}
class CustomeLink extends React.Component {
  render() {
    return (
      <Router>
        <div className="panel">
          <h2>Custome Link</h2>
          <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="Home" />
          <OldSchoolMenuLink to="/about" label="About" />
          <hr />
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }
}

export default CustomeLink
