import React from 'react'
import img from './panda.jpeg'

class Panda extends React.Component {
  render() {
    const mouse = this.props.mouse
    const offsetTop = this.props.offsetTop
    // console.log(mouse)
    return (
      <img
        // src="./timg.jpeg"
        // src={require('./panda.jpeg')}
        src={img}
        style={{
          position: 'absolute',
          left: mouse.x + 'px',
          top: mouse.y - offsetTop + 'px',
          width: '50px',
          height: '50px'
        }}
        alt=""
      />
    )
  }
}

export default Panda
