import React from 'react'
import StateHook from './state'
import EffectHook from './effect'

export default class Hook extends React.Component {
  render() {
    return (
      <div className="panel">
        <StateHook />
        <EffectHook />
      </div>
    )
  }
}
