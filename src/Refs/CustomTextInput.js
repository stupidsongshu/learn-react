import React from 'react'

class CustomTextInput extends React.Component {
  focusTextInput(e) {
    console.log('子组件----')
    // e.target.focus()
  }
  render() {
    return (
      <input
        onClick={this.focusTextInput.bind(this)}
        placeholder="CustomTextInput"
      />
    )
  }
}

export default CustomTextInput
