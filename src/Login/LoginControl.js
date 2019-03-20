import React from 'react'

function UserGreeting(props) {
  return <h2>Welcome back!</h2>
}
function GuestGreeting(props) {
  return <h2>Please sign up.</h2>
}
function Greeting(props) {
  if (props.isLoggedIn) {
    return <UserGreeting />
  } else {
    return <GuestGreeting />
  }
}

function Login(props) {
  return <button onClick={props.onClick}>login</button>
}
function Logout(props) {
  return <button onClick={props.a}>logout</button>
}

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }
  return (
    <div className="warning">
      warning!
    </div>
  )
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  toggleLogin() {
    this.setState((prevState, props) => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    if (!isLoggedIn) {
      button = <Login onClick={this.toggleLogin.bind(this)}></Login>
    } else {
      button = <Logout a={this.toggleLogin.bind(this)} />
    }

    return (
      <div className="panel">
        <WarningBanner warn={isLoggedIn} />
        <button onClick={this.toggleLogin.bind(this)}>{isLoggedIn ? 'logoutButton' : 'loginButton'}</button>
        {button}
        {isLoggedIn && <Logout />}
        {!isLoggedIn && <Login />}
        {isLoggedIn ? (
          <Logout />
        ) : (
          <Login />
        )}
        <Greeting isLoggedIn={isLoggedIn} />
      </div>
    )
  }
}

export default LoginControl
