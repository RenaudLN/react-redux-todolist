import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonList,
  IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon,
} from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router'
import { add } from 'ionicons/icons';


class TodoItem extends React.Component<{title: string, note: string, days: number}> {
  // constructor(props: any) {
  //   super(props);
  // //   this.state = { title: props.title, note: props.note, days: props.days };
  // }
  render() {
    let daystring, color
    if (this.props.days === 1) {
      daystring = "day"
    } else {
      daystring = "days"
    }
    if (this.props.days < 1) {
      color = "danger"
    } else if (this.props.days <= 3) {
      color = "warning"
    } else {
      color = "success"
    }
    return(
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>{this.props.title}</h1>
          <IonNote>{this.props.note}</IonNote>
        </IonLabel>
        <IonBadge color={color} slot="end">
          {this.props.days} {daystring}
        </IonBadge>
      </IonItem>
    )
  }
};

class Home extends React.Component<
  RouteComponentProps<{}> & {todolist: { title: string; note: string; days: number; }[]},
  {}[]
> {
  constructor(props: any) {
    super(props)
    this.state = props.todolist.map(() => false)
  }
  render() {
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {this.props.todolist.map(function(item, key){
            return <TodoItem title={item.title} note={item.note} days={item.days} key={key}/>;
          })}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => this.props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
    )
  }
};

class MyForm extends React.Component<{}, { username: string }> {
  constructor(props: any) {
    super(props);
    this.state = { username: '' };
  }
  myChangeHandler = (event: any) => {
    this.setState({username: event.target.value});
  }
  render() {
    let header;
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
      {header}
      <p>Enter your name:</p>
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      </form>
    );
  }
}

export default Home;
