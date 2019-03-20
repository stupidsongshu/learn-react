import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom'
import Welcome from './Welcome'
import Clock from './Clock'
import Login from './Login/LoginControl'
import LifeCycle from './LifeCycle'
import NameForm from './Form/NameForm'
import Calculator from './Calculator/Calculator'
import WelcomeDialog from './Combine/WelcomeDialog'
import ButtonCom from './button'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
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

// function Clock(props) {
//   return (
//     <div>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   )
// }

// function tick() {
//   ReactDOM.render(<Clock />, document.getElementById('time'));
// }

function WelcomeFn(props) {
  return <h2>welcome, {props.name}</h2>
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      lifeCycleShow: true
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ lifeCycleShow: !prevState.lifeCycleShow }))
  }
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
        <p>formatName: {formatName(user)}</p>
        <div>{greeting(user)}</div>
        <div id="time"></div>
        <Clock increment={2} />
        <WelcomeFn name="zys0"></WelcomeFn>
        <Welcome name="zys1"></Welcome>

        <hr />
        <button onClick={this.handleClick}>生命周期</button>
        {this.state.lifeCycleShow && <LifeCycle obj={this.state.lifeCycleShow} />}

        <Login></Login>

        <NameForm></NameForm>

        <Calculator/>

        <WelcomeDialog />

        <ButtonCom/>
      </div>
    );
  }
}

export default App;
