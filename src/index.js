import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './Redux/store/index'

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// const initialState = {
//   count: 0
// }

/**
 * 1.Reducer 规则一：reducer 绝不能返回 undefined。
 * 2.Reducer 规则二：Reducers 必须是纯函数。
 * 也就是说不能修改它们的参数，也不能有副作用（side effect）。
 * “副作用（side effect）”是指对函数作用域之外的任何更改。不要改变函数作用域以外的变量，不要调用其他会改变的函数（比如 fetch，跟网络和其他系统有关），也不要 dispatch actions 等。
 * 最重要的事情是：不要修改 state 参数。
 */
// function reducer(state = initialState, action) {
//   console.log('reducer********:', state, action)
//   switch(action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       }
//     case 'DECREMENT':
//       return {
//         count: state.count - 1
//       }
//     case 'RESET':
//       return {
//         state: 0
//       }
//     default:
//       return state
//   }
// }

// const store = createStore(reducer)
// console.log('store*********:', store)
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'INCREMENT' })
// store.dispatch({ type: 'DECREMENT' })
// store.dispatch({ type: 'RESET' })

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>
  <App />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
