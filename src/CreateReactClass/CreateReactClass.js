import React from 'react'
const createReactClass = require('create-react-class')

const SetIntervalMixin = {
  componentWillMount() {
    this.intervals = []
  },
  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  },
  componentDidMount() {
    console.log('mixin componentDidMount')
  },
  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments))
  }
}

const Greeting = createReactClass({
  // 混入
  // ES6 本身是不包含混入支持的。因此，如果你使用 class 关键字创建组件，那就不能使用混入功能了。
  mixins: [SetIntervalMixin],
  // 声明默认属性
  getDefaultProps() {
    return {
      name: 'zys',
      seconds: 0,
      message: 'hello'
    }
  },
  // 设置初始状态
  getInitialState() {
    return {
      seconds: this.props.seconds,
      message: this.props.message
    }
  },
  // 组件中的方法会自动绑定至实例，不需要像通过 ES6 class 生成的实例那样加 .bind(this)
  handleClick() {
    console.log(`Hello ${this.props.name} ${this.state.seconds}`)
  },

  tick() {
    this.setState({
      seconds: this.state.seconds + 1
    })
  },

  componentDidMount() {
    console.log('create react class componentDidMount')
    this.setInterval(this.tick, 1000)
  },

  render() {
    return (
      <div className="panel">
        <button onClick={this.handleClick}>
          Say hello {this.props.name} {this.state.seconds}
        </button>
      </div>
    )
  }
})

export default Greeting
