import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: '/about',
    sidebar: () => <div>about</div>,
    main: () => <h2>About</h2>
  },
  {
    path: '/user',
    sidebar: () => <div>user</div>,
    main: () => <h2>User</h2>
  }
]

class Sidebar extends React.Component {
  render() {
    return (
      <Router>
        <h2>Sidebar</h2>
        <div className="panel" style={{display: 'flex'}}>
          <div style={{width: '40%', padding: '10px', backgroundColor: '#f0f0f0'}}>
            {routes.map((route, index) => (
              <Link key={index} to={route.path}>{route.sidebar()}</Link>
            ))}
            {routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} component={route.sidebar} />
            ))}
          </div>
          <div style={{flex: 1, padding: '10px'}}>
            {routes.map((route, index) => (
              <Route key={index} exact={route.exact} path={route.path} render={_ => route.main()} />
            ))}
          </div>
        </div>
      </Router>
    )
  }
}

export default Sidebar
