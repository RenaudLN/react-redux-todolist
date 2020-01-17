import { connect } from 'react-redux'
import { removeTodo } from '../actions'
import ClearCompleted from '../components/ClearCompleted'

const mapStateToProps = (state: {todos: {id: number, text: string, completed: boolean}[]}) => {
  let indexes: number[] = []
  for (let i = 0; i < state.todos.length; i++) {
    if (state.todos[i].completed) {
      indexes.push(i)
    }
  }
  return {
    indexes
  }
}
const mapDispatchToProps = (dispatch: (...args: any[]) => any) => {
  return {
    onClearClick: (indexes: number[]) => {
      dispatch(removeTodo(indexes))
    }
  }
}
const RemoveTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCompleted)
export default RemoveTodo