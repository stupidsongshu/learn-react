import React from 'react'
import ReactRouterDOM from './react-router-dom'
import Redirect from './Redirect'
import CustomeLink from './CustomeLink'
import Sidebar from './Sidebar'
import AnimatedTransitions from './AnimatedTransitions'

class RouterExample extends React.Component {
  render() {
    return (
      <div className="panel">
        <ReactRouterDOM />
        <Redirect />
        <CustomeLink />
        <Sidebar />
        <AnimatedTransitions />
      </div>
    )
  }
}

export default RouterExample
