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
  /**
   * 如果不初始化 state 或不进行方法绑定，则不需要为 React 组件实现构造函数。
   * 在 React 组件挂载之前，会调用它的构造函数。在为 React.Component 子类实现构造函数时，应在其他语句之前调用 super(props)。否则，this.props 在构造函数中可能会出现未定义的 bug。
   * 通常，在 React 中，构造函数仅用于以下两种情况：1.通过给 this.state 赋值对象来初始化内部 state; 2.为事件处理函数绑定实例
   * 在 constructor() 函数中不要调用 setState() 方法。如果你的组件需要使用内部 state，请直接在构造函数中为 this.state 赋值初始 state
   * 只能在构造函数中直接为 this.state 赋值。如需在其他方法中赋值，你应使用 this.setState() 替代。
   * 避免将 props 的值复制给 state！
   */
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
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps')
  }
  /**
   * shouldComponentUpdate(nextProps, nextState)
   * 根据 shouldComponentUpdate() 的返回值，判断 React 组件的输出是否受当前 state 或 props 更改的影响。默认行为是 state 每次发生变化组件都会重新渲染。大部分情况下，你应该遵循默认行为。
   * 当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。首次渲染或使用 forceUpdate() 时不会调用该方法。
   * 此方法仅作为性能优化的方式而存在。不要企图依靠此方法来“阻止”渲染，因为这可能会产生 bug。你应该考虑使用内置的 PureComponent 组件，而不是手动编写 shouldComponentUpdate()。PureComponent 会对 props 和 state 进行浅层比较，并减少了跳过必要更新的可能性。
   * 如果你一定要手动编写此函数，可以将 this.props 与 nextProps 以及 this.state 与nextState 进行比较，并返回 false 以告知 React 可以跳过更新。请注意，返回 false 并不会阻止子组件在 state 更改时重新渲染。
   * 我们不建议在 shouldComponentUpdate() 中进行深层比较或使用 JSON.stringify()。这样非常影响效率，且会损害性能。
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }
  /**
   * componentDidUpdate(prevProps, prevState, snapshot)
   * componentDidUpdate() 会在更新后会被立即调用。首次渲染不会执行此方法。
   * 你也可以在 componentDidUpdate() 中直接调用 setState()，但请注意它必须被包裹在一个条件语句里，否则会导致死循环。它还会导致额外的重新渲染，虽然用户不可见，但会影响组件性能。不要将 props “镜像”给 state，请考虑直接使用 props。
   * 如果组件实现了 getSnapshotBeforeUpdate() 生命周期（不常用），则它的返回值将作为 componentDidUpdate() 的第三个参数 “snapshot” 参数传递。否则此参数将为 undefined。
   */
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  /**
   * componentWillUnmount() 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作，例如，清除 timer，取消网络请求或清除在 componentDidMount() 中创建的订阅等。
   * componentWillUnmount() 中不应调用 setState()，因为该组件将永远不会重新渲染。组件实例卸载后，将永远不会再挂载它。
   */
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
