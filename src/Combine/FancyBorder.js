import React from 'react'

class FancyBorder extends React.Component {
  render() {
    return (
      <div className={"fancyBorder fancyBorder-" + this.props.color}>
        {this.props.children}
      </div>
    )
  }
}

export default FancyBorder
