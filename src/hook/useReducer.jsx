import React, { useReducer } from 'react'

const initialState = { count: 0 }

function reducer1(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function ReducerHook1() {
  // 指定初始 state: 将初始 state 作为第二个参数传入 useReducer 是最简单的方法
  const [state, dispatch] = useReducer(reducer1, initialState)

  return (
    <div className="panel">
      <h2>Reducer Hook</h2>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  )
}

function init(initialCount) {
  return { count: initialCount }
}
function reducer2(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

function ReducerHook2({ initialCount }) {
  // 惰性初始化 state: 需要将 init 函数作为 useReducer 的第三个参数传入，这样初始 state 将被设置为 init(initialArg)。
  // 这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利
  const [state, dispatch] = useReducer(reducer2, initialCount, init)
  return (
    <div className="panel">
      <h2>Reducer Hook</h2>
      <p>count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>reset</button>
    </div>
  )
}

export {
  ReducerHook1,
  ReducerHook2
}
