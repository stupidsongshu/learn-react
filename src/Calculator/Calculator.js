import React from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scale: 'c',
      temperature: ''
    }
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
  }

  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32
  }

  tryConvert(temperature, convert) {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      // 输入不合法的时候返回空字符串
      return ''
    }
    const output = convert(input)
    // 小数点后三位
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  handleChange(val) {
    this.setState({
      scale: val.scale,
      temperature: val.temperature
    })
  }

  render() {
    let celsius
    let fahrenheit
    const scale = this.state.scale
    const temperature = this.state.temperature
    if (scale === 'c') {
      celsius = temperature
      fahrenheit = this.tryConvert(temperature, this.toFahrenheit)
    } else if (scale === 'f') {
      celsius = this.tryConvert(temperature, this.toCelsius)
      fahrenheit = temperature
    }

    return (
      <div className="panel">
        <TemperatureInput
          scale = 'c'
          temperature={celsius}
          onChange={this.handleChange.bind(this)}
        />
        <TemperatureInput
          scale = 'f'
          temperature={fahrenheit}
          onChange={this.handleChange.bind(this)}
        />
        <BoilingVerdict celsius={parseFloat(celsius, 10)} />
      </div>
    )
  }
}

export default Calculator
