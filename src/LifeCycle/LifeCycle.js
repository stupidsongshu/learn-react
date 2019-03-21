import React from 'react'

function ListItem(props) {
  return <li>{props.value}</li>
}

class LifeCycle extends React.Component {
  constructor(props) {
    console.log('0.constructor')
    super(props)
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('1.componentWillMount')
  }
  componentDidMount() {
    console.log('3.componentDidMount')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleClick = _ => {
    this.setState((prevState) => ({ count: ++prevState.count }))
  }

  render() {
    console.log('2.render')
    const numbers = [1, 2, 3, 4, 5]

    return (
      <div>
        <button onClick={this.handleClick}>LifeCycle {this.state.count}</button>
        <ul>
          {
            numbers.map((number) => [
              <ListItem key={number.toString()} value={number * 2}></ListItem>
            ])
          }
        </ul>
      </div>
    )
  }
}

export default LifeCycle
