import React from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      textarea: 'Please write an essay about your favorite DOM element.',
      select: '3',
      checkbox: false,
      number: ''
    }
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({
      value: e.target.value.toUpperCase()
    })
  }

  handleChangeTextarea(e) {
    this.setState({
      textarea: e.target.value
    })
  }

  handleChangeSelect(e) {
    this.setState({
      select: e.target.value
    })
  }

  handleChangeInput(e) {
    const target = e.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    // this.setState({
    //   [name]: value
    // })

    let partialState = {}
    partialState[name] = value
    this.setState(partialState)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      /**
       * 受控组件
       * 在HTML当中，像<input>,<textarea>, 和 <select>这类表单元素会维持自身状态，并根据用户输入进行更新。但在React中，可变的状态通常保存在组件的状态属性中，并且只能用 setState() 方法进行更新。
       * 我们通过使react变成一种单一数据源的状态来结合二者。React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件”。
       */
      <div>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <label>
            text<input
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              placeholder="Please input something"
            />
          </label>
          <br/>
          <label>
            textarea<textarea
              value={this.state.textarea}
              onChange={this.handleChangeTextarea.bind(this)}>
            </textarea>
          </label>
          <br/>
          <label>
            select<select value={this.state.select} onChange={this.handleChangeSelect.bind(this)}>
              <option value="">请选择</option>
              <option value="1">html</option>
              <option value="2">css</option>
              <option value="3">js</option>
            </select>
          </label>
          <br/>

          {/* 当你有处理多个受控的input元素时，你可以通过给每个元素添加一个name属性，来让处理函数根据 event.target.name的值来选择做什么。 */}
          <label>
            checkbox<input
              type="checkbox"
              name="checkbox"
              // 注意：checked
              checked={this.state.checkbox}
              onChange={this.handleChangeInput.bind(this)}
            />
          </label>
          <br/>
          <label>
            number<input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChangeInput.bind(this)}
            />
          </label>
          <br/>

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default NameForm
