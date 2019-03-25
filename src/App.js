import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome'
import Clock from './Clock'
import Login from './Login/LoginControl'
import LifeCycle from './LifeCycle/index'
import NameForm from './Form/Form'
import Calculator from './Calculator/Calculator'
import WelcomeDialog from './Combine/WelcomeDialog'
import ButtonCom from './button'
import PropTypes from './PropTypes/PropTypes'
import Refs from './Refs/index'
import PureComponent from './PureComponent'
import CreateReactClass from './CreateReactClass/CreateReactClass'
import Context from './Context/Context'
import Fragment from './Fragment/Fragment'
import Portal from './Portal/Portal'
import ErrorBoundary from './ErrorBoundaries/ErrorBoundary'
import BuggyCounter from './ErrorBoundaries/BuggyCounter'
import MouseTracker from './RenderProps/MouseTracker'

function formatName(user) {
  return user.firstName + ' ' + user.lastName
}
function greeting(user) {
  if (!user) {
    return <h1>hello, stranger</h1>
  } else {
    return <h1>hello, {formatName(user)}</h1>
  }
}
const user = {
  firstName: 'Hello',
  lastName: 'world'
}

function WelcomeFn(props) {
  return <h2 className="panel">welcome, {props.name}</h2>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <div className="panel">
          <p>formatName: {formatName(user)}</p>
          <div>{greeting(user)}</div>
        </div>

        <Clock increment={2} />

        <WelcomeFn name="zys0"></WelcomeFn>
        <Welcome name="zys1"></Welcome>

        <LifeCycle></LifeCycle>

        <Login></Login>

        <NameForm></NameForm>

        <Calculator/>

        <WelcomeDialog />

        <ButtonCom/>

        <PropTypes/>

        <Refs></Refs>

        <PureComponent />

        <CreateReactClass />

        <Context />

        <Fragment />

        <div id="modal-root"></div>
        <Portal></Portal>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>

        <MouseTracker />
      </div>
    );
  }
}

export default App;
