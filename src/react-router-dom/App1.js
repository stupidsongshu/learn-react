import React from 'react'
// import createReactClass from 'create-react-class'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const createReactClass = require('create-react-class')

// const App1 = createReactClass({
//   render() {
//     return (
//       <div>
//         <h1>App1</h1>
//         <ul>
//           <li>
//             <Link to='/about'>About</Link>
//           </li>
//           <li>
//             <Link to='/inbox'>Inbox</Link>
//           </li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

// const About = createReactClass({
//   render() {
//     return <h3>About</h3>
//   }
// })

// const Inbox = createReactClass({
//   render() {
//     return (
//       <div>
//         <h2>Inbox</h2>
//         {this.props.children || 'Welcome to your Inbox.'}
//       </div>
//     )
//   }
// })

// const Message = createReactClass({
//   render() {
//     return <h3>Message {this.props.params.id}</h3>
//   }
// })

function App1() {
  return (
    <div>
      <h1>App1</h1>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/inbox'>Inbox</Link>
        </li>
      </ul>
      {this.props.children}
    </div>
  )
}

function About() {
  return <h3>About</h3>
}

function Inbox() {
  return (
    <div>
      <h2>Inbox</h2>
      {this.props.children || 'Welcome to your Inbox.'}
    </div>
  )
}

function Message() {
  return <h3>Message {this.props.params.id}</h3>
}

function App1Router() {
  return (
    <Router>
      <Route path='/' component={App1}>
        <Route path='about' component={About}></Route>
        <Route path='inbox' component={Inbox}>
          <Route path='messages/:id' component={Message}></Route>
        </Route>
      </Route>
    </Router>
  )
}

export default App1Router
