import React from 'react'
import FancyBorder from './FancyBorder'

class Dialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <hr />
        <h1 className="dialog-title">
          {this.props.title}
        </h1>
        <p className="dialog-message">
          {this.props.message}
        </p>
      </FancyBorder>
    )
  }
}

export default Dialog
