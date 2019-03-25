import React from 'react'
import Mouse from './Mouse'
import Panda from './Panda'

class RenderProps extends React.Component {
  constructor() {
    super()
    this.el = React.createRef()
  }
  componentDidMount() {
    console.log('getBoundingClientRect---------', this.el.current.getBoundingClientRect())
    console.log('offsetParent---------', this.el.current.offsetParent)
    console.log('offsetTop---------', this.el.current.offsetTop)
    console.log('scrollTop---------', this.el.current.scrollTop)
    // this.offsetTop = this.el.current.offsetTop
    this.offsetTop = this.el.current.getBoundingClientRect().y
  }
  render() {
    return (
      <div className="panel" ref={this.el}>
        <div style={{ position: 'relative', height: '100%'}}>
          <h2>Move the mouse around!</h2>
          <Mouse render={mouse => (
            <Panda offsetTop={this.offsetTop} mouse={mouse} />
          )} />
        </div>
      </div>
    )
  }
}

export default RenderProps
