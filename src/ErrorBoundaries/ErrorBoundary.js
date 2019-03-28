import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }
  /**
   * static getDerivedStateFromError(error)
   * 此生命周期会在后代组件抛出错误后被调用。 它将抛出的错误作为参数，并返回一个值以更新 state
   * getDerivedStateFromError() 会在渲染阶段调用，因此不允许出现副作用。 如遇此类情况，请改用 componentDidCatch()。
   */
  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError-----:', error)
    return { hasError: true }
  }
  /**
   * componentDidCatch(error, info)
   * 此生命周期在后代组件抛出错误后被调用。 它接收两个参数：1.error —— 抛出的错误。 2.info —— 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息。
   * componentDidCatch() 会在“提交”阶段被调用，因此允许执行副作用。 它应该用于记录错误之类的情况
   */
  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch-----:', error, errorInfo)
    this.setState({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
