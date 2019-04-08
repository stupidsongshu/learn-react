import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import './css/fade.css'
import testModule from './css/test.module.css'

const navList = [
  {
    name: 'Red',
    path: '/hsl/10/90/50',
    color: 'hsl(10, 90%, 50%)'
  },
  {
    name: 'Green',
    path: '/hsl/120/100/40',
    color: 'hsl(120, 100%, 40%)'
  },
  {
    name: 'Blue',
    path: '/rgb/33/150/243',
    color: 'rgb(33, 150, 243)'
  },
  {
    name: 'Pink',
    path: '/rgb/240/98/146',
    color: 'rgb(240, 98, 146)'
  }
]

function AnimationTransitions() {
  return (
    <Router>
      <Route render={({location}) => (
        <div className="panel" style={{position: 'relative', height: '200px'}}>
          <div style={styles.fill}>
            <Route exact path='/' render={_ => <Redirect to="/hsl/10/90/50" />} />
            <ul style={styles.nav} className={testModule.test}>
              {/* <NavLink to="/hsl/10/90/50">Red</NavLink>
              <NavLink to="/hsl/120/100/40">Green</NavLink>
              <NavLink to="/rgb/33/150/243">Blue</NavLink>
              <NavLink to="/rgb/240/98/146">Pink</NavLink> */}
              {
                navList.map((item, index) => (
                  <NavLinkCustom
                    key={index}
                    to={item.path}
                    active-class="hahaha"
                    activecolor={item.color}
                  >{item.name}</NavLinkCustom>
                ))
              }
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

function NavLinkCustom(props) {
  return (
    <li style={styles.navItem}>
      <NavLink
        {...props}
        style={{color: 'inherit'}}
        activeClassName={props['active-class']}
        activeStyle={{color: props.activecolor}}>
      </NavLink>
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
  padding: "10px",
  color: "#abcdef"
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
