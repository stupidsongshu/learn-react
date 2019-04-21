import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

class Counter extends React.Component {
  // state = { count: 0 }
  increment = () => {
    // this.setState({
    //   count: this.state.count + 1
    // })
  }
  decrement = () => {
    // this.setState({
    //   count: this.state.count - 1
    // })
  }
  render() {
    return (
      <div className="panel">
        <h2>Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Counter)
