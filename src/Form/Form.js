import React from 'react'
import NameForm from './NameForm'
import UncontrolledComponent from './UncontrolledComponent'

class Form extends React.Component {
  render() {
    return (
      <div className="panel">
        <NameForm></NameForm>
        <UncontrolledComponent></UncontrolledComponent>
      </div>
    )
  }
}

export default Form
