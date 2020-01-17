import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, REMOVE_TODO, VisibilityFilters } from '../actions'
import { combineReducers } from 'redux'

const { SHOW_ALL } = VisibilityFilters

function todos(state: {text: string, completed: boolean}[], action: {type: string, text: string, index: number, indexes: number[]}) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {text: action.text, completed: false}]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {completed: !todo.completed})
        }
        return todo
      })
    case REMOVE_TODO:
      let newTodos = []
      for (let i = 0; i < state.length; i++) {
        if (action.indexes.indexOf(i) === -1) {
          newTodos.push(state[i])
        }
      }
      return newTodos
    default:
      if (state === undefined) {
        return [{text: "Todo 1", completed: false}]
      }
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action: {type: string, filter: string}) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})
export default todoApp