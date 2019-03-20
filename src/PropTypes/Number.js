import React from 'react'
// import PropTypes from 'prop-types'

class Number extends React.Component {
  render() {
    return (
      <div className="panel">
        {this.props.number}
      </div>
    )
  }
}

Number.propTypes = {
  // number: PropTypes.string
  // 自定义验证器
  number: function(props, propName, componentName) {
    const propValue = props[propName]
    if (typeof(propValue) !== 'number' || !/^\d*$/.test(propValue)) {
      const message = `自定义验证器：Invalid prop \`${propName}\` of type \`${typeof(propValue)}\` supplied to \`${componentName}\`, Validation failed.`
      return new Error(message)
    }
  }
}
// 通过配置 defaultProps 为 props 定义默认值
Number.defaultProps = {
  number: 1024
}

export default Number
