import React from 'react'
import { IonInput, IonLabel, IonItem } from '@ionic/react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component<{dispatch: (...args: any[]) => any}, {text: string}> {
  constructor(props: any) {
    super(props)
    this.state = { text: ""}
  }
  submitTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!this.state.text.trim()) {
      return
    }
    this.props.dispatch(addTodo(this.state.text))
    this.setState({ text: ""})
  }
  updateText = (event: any) => {
    this.setState({text: event.target.value});
  }
  render() {
    return (
      <form onSubmit={(e) => this.submitTodo(e)} >
        <IonItem>
          <IonLabel position="floating">Add something to do...</IonLabel>
          <IonInput type="text" value={this.state.text} onIonChange={this.updateText}/>
        </IonItem>
      </form>
    )
  }
}

const CAddTodo = connect()(AddTodo)
export default CAddTodo