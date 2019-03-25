import React from 'react'

/**
 * React.PureComponent 中以浅层对比 prop 和 state 的方式来实现了该函数。
 * 如果赋予 React 组件相同的 props 和 state，render() 函数会渲染相同的内容，那么在某些情况下使用 React.PureComponent 可提高性能。
 * React.PureComponent 中的 shouldComponentUpdate() 仅作对象的浅层比较。如果对象中包含复杂的数据结构，则有可能因为无法检查深层的差别，产生错误的比对结果。仅在你的 props 和 state 较为简单时，才使用 React.PureComponent，或者在深层数据结构发生变化时调用 forceUpdate() 来确保组件被正确地更新。你也可以考虑使用 immutable 对象加速嵌套数据的比较。
 * 此外，React.PureComponent 中的 shouldComponentUpdate() 将跳过所有子组件树的 prop 更新。因此，请确保所有子组件也都是“纯”的组件。
 */
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
