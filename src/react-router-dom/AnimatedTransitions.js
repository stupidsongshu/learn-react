import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './css/fade.css'

function AnimationTransitions() {
  return (
    <Router>
      <Route render={({location}) => (
        <div className="panel" style={{position: 'relative', height: '200px'}}>
          <div style={styles.fill}>
            <Route exact path='/' render={_ => <Redirect to="/hsl/10/90/50" />} />
            <ul style={styles.nav}>
              <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink>
            </ul>

            <div style={styles.content}>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    <Route exact path="/hsl/:h/:s/:l" component={HSL}></Route>
                    <Route exact path="/rgb/:r/:g/:b" component={RGB}></Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        </div>
      )}></Route>
    </Router>
  )
}

function NavLink(props) {
  return (
    <li style={styles.navItem}>
      <Link {...props} style={{color: 'inherit'}}></Link>
    </li>
  )
}

function HSL({ match: { params } }) {
  const backgroundColor = `hsl(${params.h}, ${params.s}%, ${params.l}%)`
  return <div style={{
    backgroundColor,
    ...styles.fill,
    ...styles.hsl
  }}>{backgroundColor}</div>
}

function RGB({ match: { params } }) {
  const backgroundColor = `rgb(${params.r}, ${params.g}, ${params.b})`
  return <div style={{
    ...styles.fill,
    ...styles.rgb,
    backgroundColor
  }}>{backgroundColor}</div>
}

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};

styles.navItem = {
  textAlign: "center",
  flex: 1,
  listStyleType: "none",
  padding: "10px"
};

styles.hsl = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

styles.rgb = {
  ...styles.fill,
  color: "white",
  paddingTop: "20px",
  fontSize: "30px"
};

export default AnimationTransitions
