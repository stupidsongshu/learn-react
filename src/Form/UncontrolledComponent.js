import React from 'react'

class UncontrolledComponent extends React.Component {
  handleSubmit(e) {
    e.preventDefault()
    console.log(this.input.value)
    let files = this.fileInput.files
    if (files.length === 0) return
    console.log(files[0])
  }
  render() {
    return (
      <div className="panel">
        非受控组件：
        <form onSubmit={this.handleSubmit.bind(this)}>
          {/* 
            非受控组件默认值：
            使用非受控组件时，通常你希望 React 可以为其指定初始值，但不再控制后续更新。
            要解决这个问题，你可以指定一个 defaultValue 属性而不是 value。
            input[text/...]/textarea/select: defaultValue
            input[checkbox/radio]: defaultChecked
           */}
          <input ref={input => this.input = input} defaultValue="default value" />

          {/* 在React中，<input type="file" /> 始终是一个不受控制的组件，因为它的值只能由用户设置，而不是以编程方式设置。 */}
           <input type="file" ref={input => this.fileInput = input} />

          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default UncontrolledComponent
