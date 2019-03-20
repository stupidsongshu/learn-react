import React from 'react'

const Button = props => {
  const { kind, ...other } = props
  const className = kind === 'primary' ? 'primaryButton' : 'secondaryButton'
  // return <button className={className} children={props.children} onClick={props.onClick}></button>
  return <button className={className} {...other} />
}

function Repeat(props) {
  let items = []
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i))
  }
  return <div>{items}</div>
}

class ButtonCom extends React.Component {
  render() {
    return (
      <div className="panel">
        <Button kind="primary" onClick={() => console.log('clicked')}>
          hello
        </Button>

        <Repeat numTimes={3}>
          {(index) => <p key={index}>This is item {index} in the list</p>}
        </Repeat>
      </div>
    )
  }
}

export default ButtonCom
