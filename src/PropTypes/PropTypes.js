import React from 'react'
import Number from './Number'
import ArrayOf from './ArrayOf'

class PropTypes extends React.Component {
  render() {
    return (
      <div className="panel">
        <Number number={1110110120} name="number"></Number>

        <ArrayOf className="panel">
          <header>arrayOf header</header>
          <p>arrayOf content</p>
          <footer>arrayOf footer</footer>
        </ArrayOf>
      </div>
    )
  }
}

export default PropTypes
