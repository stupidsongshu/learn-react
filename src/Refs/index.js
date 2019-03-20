import React from 'react'
import CustomTextInput from './CustomTextInput'
import RefCallback from './RefCallback'

/**
 * 何时使用 Refs(如果可以通过声明式实现，则尽量避免使用 refs。):
 * 1.处理焦点、文本选择或媒体控制。
 * 2.触发强制动画。
 * 3.集成第三方 DOM 库
 * 注意：不能在函数式组件上使用 ref 属性，因为它们没有实例。
 * React 会在组件加载时将 DOM 元素传入 current 属性，在卸载时则会改回 null。ref 的更新会发生在componentDidMount 或 componentDidUpdate 生命周期钩子之前。
 */
class Refs extends React.Component {
  constructor(props) {
    super(props)
    // 当 ref 属性被用于一个普通的 HTML 元素时，React.createRef() 将接收底层 DOM 元素作为它的 current 属性以创建 ref 。
    this.domRef = React.createRef()
    // 当 ref 属性被用于一个自定义类组件时，ref 对象将接收该组件已挂载的实例作为它的 current 。
    this.comRef = React.createRef()
  }
  componentDidMount() {
    console.log('domref', this.domRef.current)
    console.log('comref', this.comRef.current)

    // this.comRef.current.onClick()
  }
  focusTextInput() {
    this.domRef.current.focus()
  }
  render() {
    return (
      <div className="panel">
        <div>
          <input ref={this.domRef} />
          <button onClick={this.focusTextInput.bind(this)}>click to focus</button>
        </div>

        <CustomTextInput ref={this.comRef}></CustomTextInput>

        <RefCallback></RefCallback>
      </div>
    )
  }
}

export default Refs
