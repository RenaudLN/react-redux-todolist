import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos: {id: number, text: string, completed: boolean}[], filter: string) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}
const mapStateToProps = (state: {todos: {id: number, text: string, completed: boolean}[], visibilityFilter: string}) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
const mapDispatchToProps = (dispatch: (...args: any[]) => any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)


export default VisibleTodoList