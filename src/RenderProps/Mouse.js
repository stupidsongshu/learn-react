import React from 'react'

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.state = { x: 0, y: 0 }
  }
  handleMousemove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    })
  }
  render() {
    return (
      <div style={{height: '100%'}} onMouseMove={this.handleMousemove.bind(this)}>
        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        {this.props.render(this.state)}
      </div>
    )
  }
}

export default Mouse
