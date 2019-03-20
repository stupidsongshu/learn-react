import React from 'react'
import Dialog from './Dialog'
import SplitPane from './SplitPane'

class WelcomeDialog extends React.Component {
  render() {
    return (
      <div className="panel">
        <Dialog
          title="Welcome"
          message="Thank you for visiting our spacecraft!">
        </Dialog>
        <SplitPane
          left="<h2>this is splitPane left <</h2>"
          right={<h2>this is splitPane right &lt;</h2>}
        ></SplitPane>
      </div>
    )
  }
}

export default WelcomeDialog
