import React from 'react'

class SplitPane extends React.Component {
  render() {
    return (
      <div className="splitPane">
        <div className="splitPane-left">
          {this.props.left}
        </div>
        <div className="splitPane-right">
          {this.props.right}
        </div>
      </div>
    )
  }
}

export default SplitPane
