import React from 'react'
import LifeCycle from './LifeCycle'

class LifeCycleParent extends React.Component {
  constructor() {
    super()
    this.state = {
      lifeCycleShow: true
    }
  }

  handleClick = () => {
    this.setState(prevState => ({ lifeCycleShow: !prevState.lifeCycleShow }))
  }

  render() {
    return (
      <div className="panel">
        <button onClick={this.handleClick}>生命周期</button>
        {
          this.state.lifeCycleShow &&
          <LifeCycle obj={this.state.lifeCycleShow} />
        }
      </div>
    )
  }
}

export default LifeCycleParent
