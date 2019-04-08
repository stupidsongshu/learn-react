import React from 'react'
import ReactRouterDOM from './react-router-dom'
import Redirect from './Redirect'
import CustomeLink from './CustomeLink'
import Sidebar from './Sidebar'
import AnimatedTransitions from './AnimatedTransitions'
import AmbiguousMatches from './AmbiguousMatches'
import RouteConfig from './RouteConfig'
import QueryParameters from './QueryParameters'
import NavLinkDemo from './NavLink'

class RouterExample extends React.Component {
  render() {
    return (
      <div className="panel">
        <ReactRouterDOM />
        <Redirect />
        <CustomeLink />
        <Sidebar />
        <AnimatedTransitions />
        <AmbiguousMatches />
        <RouteConfig />
        <QueryParameters />
        <NavLinkDemo />
      </div>
    )
  }
}

export default RouterExample
