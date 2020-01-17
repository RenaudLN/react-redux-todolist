import React from 'react'
import { IonButton } from '@ionic/react';

class Link extends React.Component<{active: boolean, children: any, onClick: (...args: any[]) => any}> {
  render() {
    return (
      <IonButton onClick={() => this.props.onClick()} disabled={this.props.active}>
        {this.props.children}
      </IonButton>
    )
  }
}

export default Link