import React from 'react'
import Modal from './Modal'
import './portal.css'

class Portal extends React.Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }
  handleShow() {
    this.setState({ showModal: true })
  }
  handleHide() {
    this.setState({ showModal: false })
  }
  render() {
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <div>With a portal, we can render content into a different part of the DOM, as if it were any other React child.</div>
          <button onClick={this.handleHide.bind(this)}>Hide modal</button>
        </div>
      </Modal>
    ) : null
    return (
      <div className="app">
        This div has overflow: hidden.
        <button onClick={this.handleShow.bind(this)}>Show modal</button>
        {modal}
      </div>
    )
  }
}

export default Portal
