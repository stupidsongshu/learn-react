import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div className="panel">
        <h1>hello, {this.props.name}</h1>
      </div>
    )
  }
}

export default Welcome
