import React from 'react'

class TemperatureInput extends React.Component {
  handleChange(e) {
    const scale = this.props.scale
    const temperature = e.target.value
    this.props.onChange({
      scale,
      temperature
    })
  }

  render() {
    const scaleNames = {
      c: '摄氏度',
      f: '华氏度'
    }
    const scale = this.props.scale
    const temperature = this.props.temperature

    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <label>
            <input
              value={temperature}
              onChange={this.handleChange.bind(this)}
              placeholder={`请输入` + scaleNames[scale]}
            />
          </label>
        </fieldset>
      </div>
    )
  }
}

export default TemperatureInput
