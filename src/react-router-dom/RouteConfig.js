import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function About() {
  return <h2>About</h2>
}
function Tacos({ routes }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/tacos/bus">bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">cart</Link>
        </li>
      </ul>

      {
        routes.map((route, index) => (
          <RouteWithSubRoutes key={index} route={route} />
        ))
      }
    </div>
  )
}
function Bus() {
  return <h3>Bus</h3>
}
function Cart() {
  return <h3>Cart</h3>
}

const routes = [
  {
    path: '/about',
    component: About
  },
  {
    path: '/tacos',
    component: Tacos,
    routes: [
      {
        path: '/tacos/bus',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      }
    ]
  }
]

function RouteWithSubRoutes({ route }) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component routes={route.routes} {...props} />
      )}
    />
  )
}

function RouteConfig() {
  return (
    <Router>
      <div className="panel">
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/tacos">tacos</Link>
          </li>
        </ul>

        {
          routes.map((route, index) => (
            <RouteWithSubRoutes key={index} route={route} />
          ))
        }
      </div>
    </Router>
  )
}

export default RouteConfig
