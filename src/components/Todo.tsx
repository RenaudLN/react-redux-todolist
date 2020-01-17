import {
    IonItem,
    IonLabel,
    IonCheckbox,
  } from '@ionic/react';
  import React from 'react';

class Todo extends React.Component<{onClick: (...args: any[]) => any, text: string, completed: boolean}> {
    render() {
      return(
        <IonItem onClick={this.props.onClick}>
          <IonCheckbox slot="start" checked={this.props.completed} />
          <IonLabel>
            <h1>{this.props.text}</h1>
          </IonLabel>
          {/* <IonBadge color={color} slot="end">
            {this.props.days} {daystring}
          </IonBadge> */}
        </IonItem>
      )
    }
  };

export default Todo