import React from 'react'
import StateHook from './state'
import EffectHook from './effect'
import { ReducerHook1, ReducerHook2 } from './useReducer'
import RefHook from './useRef'

export default class Hook extends React.Component {
  render() {
    return (
      <div className="panel">
        <StateHook />
        <EffectHook />
        <ReducerHook1 />
        <ReducerHook2 initialCount={-1} />
        <RefHook />
      </div>
    )
  }
}
