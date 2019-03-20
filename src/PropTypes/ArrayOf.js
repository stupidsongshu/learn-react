import React from 'react'
import PropTypes from 'prop-types'

class ArrayOf extends React.Component {
  render() {
    const { className, children } = this.props
    return (
      <div className={className}>
        {children}
      </div>
    )
  }
}

ArrayOf.propTypes = {
  children: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
    console.log(propValue, key, componentName, location, propFullName)
  })
}

export default ArrayOf
