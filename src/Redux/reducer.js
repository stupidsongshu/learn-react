import {
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO,
  VisibilityFilters
} from './store/actions'

const { SHOW_ALL } = VisibilityFilters

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    // {
    //   text: 'Consider using Redux',
    //   completed: true,
    // }
  ]
}

function todoApp1(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      // 不要修改 state
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state,
        {
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: false
            }
          ]
        }
      )
    case TOGGLE_TODO:
      return Object.assign({}, state,
        {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
            return todo
          })
        }
      )
    default:
      // 在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
      return state
  }
}

function todoApp2(state = initialState, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, ...state, {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
      })
    case ADD_TODO:
      return Object.assign({}, ...state, {
        todos: todos(state.todos, action)
      })
    case TOGGLE_TODO:
      return Object.assign({}, ...state, {
        todos: todos(state.todos, action)
      })
    default:
      return state
  }
}

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
function todoApp3(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

// export default todoApp1
// export default todoApp2
export default todoApp3
