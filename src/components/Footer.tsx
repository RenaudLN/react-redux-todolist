import {
    IonFooter,
    IonToolbar,
    IonRadioGroup,
    IonListHeader,
    IonLabel,
    IonItem,
    IonRadio
  } from '@ionic/react';
import React from 'react'
import FilterLink from '../containers/FilterLink'
import RemoveTodo from '../containers/RemoveTodo'
import { VisibilityFilters } from '../actions'

class Footer extends React.Component {
  render() {
    return (
      <IonFooter>
        <IonToolbar>
          <p>
            {"Show"}
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
            <RemoveTodo />
          </p>
          {/* <IonRadioGroup>
              <IonLabel>Biff</IonLabel>
              <IonRadio slot="start" value="biff" checked />
              <IonLabel>Griff</IonLabel>
              <IonRadio slot="start" value="griff" />
              <IonLabel>Buford</IonLabel>
              <IonRadio slot="start" value="buford" />
          </IonRadioGroup> */}
        </IonToolbar>
      </IonFooter>
    )
  }
}

export default Footer