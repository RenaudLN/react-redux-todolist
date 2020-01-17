import React from 'react'
import { IonButton } from '@ionic/react';


class ClearCompleted extends React.Component<{indexes: number[], onClearClick: (...args: any[]) => any}> {
  render() {
    return (
      <IonButton onClick={() => this.props.onClearClick(this.props.indexes)} disabled={this.props.indexes.length === 0}>
        Clear completed
      </IonButton>
    )
  }
}

export default ClearCompleted