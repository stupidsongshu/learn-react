import React from 'react'

function ListItem(props) {
  return <li>{props.value}</li>
}

/**
 * 1.挂载(当组件实例被创建并插入 DOM 中时，其生命周期调用顺序如下：)
 * constructor()
 * static getDerivedStateFromProps()
 * render()
 * componentDidMount()
 * 2.更新(当组件的 props 或 state 发生变化时会触发更新。组件更新的生命周期调用顺序如下：)
 * static getDerivedStateFromProps()
 * shouldComponentUpdate()
 * render()
 * getSnapshotBeforeUpdate()
 * componentDidUpdate()
 * 3.卸载(当组件从 DOM 中移除时会调用如下方法：)
 * componentWillUnmount()
 * 4.错误处理(当渲染过程，生命周期，或子组件的构造函数中抛出错误时，会调用如下方法：)
 * static getDerivedStateFromError()
 * componentDidCatch()
 */
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
