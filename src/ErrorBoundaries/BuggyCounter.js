import React from 'react'

class BuggyCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }
  
  handleClick() {
    this.setState(({counter}) => ({
      counter: counter + 1
    }))
  }

  render() {
    if (this.state.counter === 3) {
      throw new Error('I crashed!')
    }
    return <h1 onClick={this.handleClick.bind(this)}>click me to ErrorBoundary {this.state.counter}</h1>
  }
}

export default BuggyCounter
