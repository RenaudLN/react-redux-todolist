import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  withIonLifeCycle,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router'
  
class NewItem extends React.Component<
  RouteComponentProps<{}> & {todolist: {title: string, note: string, days: number | string}[]},
  {title: string, note: string, days: number | string}
> {
  constructor(props: any) {
    super(props)
    this.state = {title: '', note: '', days: ''}
  }
  ionViewDidLeave() {
    this.setState({title: '', note: '', days: ''});
  }
  updateTitle = (event: any) => {
    this.setState({title: event.target.value});
  }
  updateNote = (event: any) => {
    this.setState({note: event.target.value});
  }
  updateDays = (event: any) => {
    this.setState({days: event.target.value});
  }
  addTodo = (event: any) => {
    if (this.state.title !== '' && this.state.note !== '' && this.state.days !== '') {
      this.props.todolist.push({title: this.state.title, note: this.state.note, days: this.state.days})
      this.props.history.push('/home')
    } else {
      console.log("Missing fields")
    }
  }
  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>New Item</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput name="title" type="text" onIonChange={this.updateTitle} value={this.state.title} required={true}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Note</IonLabel>
              <IonInput name="note" type="text" onIonChange={this.updateNote} value={this.state.note} required={true} />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Days</IonLabel>
              <IonInput name="days" type="number" onIonChange={this.updateDays} value={String(this.state.days)} required={true} />
            </IonItem>
            <IonButton onClick={this.addTodo}>Add to List</IonButton>
          </form>
        </IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(NewItem);