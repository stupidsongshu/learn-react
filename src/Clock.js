import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      count: 0
    }
    // 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定 this 的。
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.timerId = setInterval(_ => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    // this.setState({
    //   date: new Date()
    // })
    // this.setState((prevState, props) => {
    //   return {
    //     count: prevState.count + props.increment
    //   }
    // })

    this.setState((prevState, props) => {
      return {
        date: new Date(),
        count: prevState.count + props.increment
      }
    })
  }

  handleClick(e) {
    console.log(this)
    e.persist()
    console.log(e)
    e.preventDefault()
  }
  // 使用实验性的属性初始化器语法，你可以使用属性初始化器来正确的绑定回调函数
  handleClick1 = () => {
    console.log(this)
  }
  // 通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
  // 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
  handleClick2(count, e) {
    console.log('count:', count)
    console.log(e)
  }
  handleClick3(e) {
    console.log(this)
  }

  render () {
    return (
      <div className="panel">
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h3>count: {this.state.count}</h3>
        <a href="https://www.baidu.com" onClick={this.handleClick}>click me</a>
        <button onClick={this.handleClick1}>click1 me</button>
        <button onClick={this.handleClick2.bind(this, this.state.count)}>click2 me</button>
        <button onClick={e => this.handleClick3(e)}>click3 me</button>
      </div>
    )
  }
}

export default Clock
