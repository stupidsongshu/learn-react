import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from './actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

// 注意每个 reducer 只负责管理全局 state 中它负责的一部分。
// 每个 reducer 的 state 参数都不同，分别对应它管理的那部分 state 数据。
// function todoApp3(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action)
//   }
// }

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

// 你也可以给它们设置不同的 key，或者调用不同的函数。下面两种合成 reducer 方法完全等价：
// const reducer1 = combineReducers({
//   a: doSomethingWithA,
//   b: processB,
//   c: c
// })
// const reducer2 = combineReducers({
//   a: doSomethingWithA(state.a, action),
//   b: processB(state.b, action),
//   c: c(state.c, action)
// })

export default todoApp
