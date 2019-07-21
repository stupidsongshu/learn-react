import React from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: function() {
      dispatch({
        type: 'DECREMENT'
      })
    },
    increment: function() {
      dispatch({
        type: 'INCREMENT'
      })
    }
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props)
    console.log('counter++++++++++++', this.props)
  }

  increment = () => {
    this.props.increment()
  }
  decrement = () => {
    this.props.decrement()
  }
  render() {
    return (
      <div className="panel">
        <h2>Redux-demo: Counter</h2>
        <button onClick={this.decrement}>-</button>
        <span>{this.props.count}</span>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
