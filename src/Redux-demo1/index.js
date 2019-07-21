// https://mp.weixin.qq.com/s/vhq4ACe_6gWeQ2bL0Cd99Q

import { createStore } from 'redux'

const initialState = {
  count: 0
}

/**
 * 1.Reducer 规则一：reducer 绝不能返回 undefined。
 * 2.Reducer 规则二：Reducers 必须是纯函数。
 * 也就是说不能修改它们的参数，也不能有副作用（side effect）。
 * “副作用（side effect）”是指对函数作用域之外的任何更改。不要改变函数作用域以外的变量，不要调用其他会改变的函数（比如 fetch，跟网络和其他系统有关），也不要 dispatch actions 等。
 * 最重要的事情是：不要修改 state 参数。
 */
function reducer(state = initialState, action) {
  console.log('reducer********:', state, action)
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        state: 0
      }
    default:
      return state
  }
}

let store = createStore(reducer, initialState)

export default store
