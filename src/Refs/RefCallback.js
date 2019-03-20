import React from 'react'

/**
 * 回调 Refs:
 * React 也支持另一种设置 ref 的方式，称为“回调 ref”，更加细致地控制何时 ref 被设置和解除。
 * 不同于传递 createRef() 创建的 ref 属性，你会传递一个函数。这个函数接受 React 组件的实例或 HTML DOM 元素作为参数，以存储它们并使它们能被其他地方访问。
 * React 将在组件挂载时将 DOM 元素传入ref 回调函数并调用，当卸载时传入 null 并调用它。ref 回调函数会在 componentDidMount 和 componentDidUpdate 生命周期函数前被调用
 */

function TextInput(props) {
  return (
    <div>
      <input ref={props.inputRef} placeholder="在组件间传递回调形式的refs" />
    </div>
  )
}

class RefCallback extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = null
    this.inputEl = null
    this.setTextInputRef = element => {
      console.log('ref callback set', element)
      this.textInput = element
    }
    this.focusTextInput = () => {
      if (this.textInput) this.textInput.focus()
    }
  }

  componentDidMount() {
    console.log('ref callback el', this.inputEl)
    this.focusTextInput()
  }

  render() {
    // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input ref={this.setTextInputRef} placeholder="使用 ref 回调函数，在实例的属性中存储对 DOM 节点的引用" />
        <input type="button" value="ref callback" onClick={this.focusTextInput.bind(this)} />

        {/* 在组件间传递回调形式的 refs */}
        <TextInput inputRef={(el) => this.inputEl = el}></TextInput>
      </div>
    )
  }
}

export default RefCallback
