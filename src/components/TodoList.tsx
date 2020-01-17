import {IonList} from '@ionic/react';
import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component<{todos: {id: number, text: string, completed: boolean}[], onTodoClick: (...args: any[]) => any}> {
  render() {
    return(
      <IonList>
        {this.props.todos.map((todo, index) => {
          return <Todo key={index} {...todo} onClick={() => this.props.onTodoClick(index)} />;
        })}
      </IonList>
    )
  }
}

export default TodoList