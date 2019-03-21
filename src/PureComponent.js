import React from 'react'

class ListOfWords extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.words.join('~')}
      </div>
    )
  }
}

class WordAdder extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      words: ['hello']
    }
  }
  handleClick() {
    // const words = this.state.words
    // // words.concat(['world']) // not work
    // words.push('world')
    // this.setState({words})

    // this.setState(prev => {
    //   console.log(prev.words)
    //   return {
    //     // words: prev.words.push('world') // Error
    //     words: prev.words.concat('world')
    //   }
    // })

    this.setState((prevState, props) => {
      return {
        count: ++prevState.count,
        words: [...prevState.words, 'world' + prevState.count]
      }
    })
  }
  render() {
    return (
      <div className="panel">
        <button onClick={this.handleClick.bind(this)}>click</button>
        <p>{this.state.words.join('^')}</p>
        <ListOfWords words={this.state.words}></ListOfWords>
      </div>
    )
  }
}

export default WordAdder
