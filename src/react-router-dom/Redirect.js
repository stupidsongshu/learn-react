import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

function AuthExample() {
  return (
    <Router>
      <div className="panel">
        <h2>Redirect</h2>
        <AuthButton />
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>

        <Route path="/public" component={Public}></Route>
        <Route path="/login" component={Login}></Route>
        <PrivateRoute path="/protected" component={Protected}></PrivateRoute>
      </div>
    </Router>
  )
}

function Public() {
  return <h3>Public</h3>
}
function Protected() {
  return <h3>Protected</h3>
}
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              search: '?utm=your+face',
              hash: '#haha',
              state: { from: props.location }
            }}
          />
        )
      }}
    />
  )
}

const AuthButton = withRouter(({history}) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button onClick={_ => fakeAuth.signout(_ => history.push('/'))}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))
class Login extends React.Component {
  state = { redirectToReferrer: false }
  login() {
    fakeAuth.authenticate(_ => {
      this.setState({ redirectToReferrer: true })
    })
  }
  render() {
    const { redirectToReferrer } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { search, hash } = this.props.location
    const merge = Object.assign({}, from, { search, hash })
    if (redirectToReferrer) return <Redirect to={merge}></Redirect>

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login.bind(this)}>Log in</button>
      </div>
    )
  }
}

export default AuthExample
