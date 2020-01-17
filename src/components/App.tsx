// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { IonApp, IonRouterOutlet } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import Home from './Home';
// import NewItem from './NewItem';

// class App extends React.Component {
//   render() {
//     var todolist = [{title: "Test", note: "A good note", days: 4}];
//     return (
//       <IonApp>
//         <IonReactRouter>
//           <IonRouterOutlet>
//             {/* <Route path="/home" component={Home} exact={true} /> */}
//             <Route path="/home" render={(props) => <Home {...props} todolist={todolist} />} exact={true} />
//             <Route path="/new" render={(props) => <NewItem {...props} todolist={todolist} />} exact={true} />
//             <Redirect exact from="/" to="/home" />
//             {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
//           </IonRouterOutlet>
//         </IonReactRouter>
//       </IonApp>
//     )
//   }
// };

// export default App;


import { IonPage, IonHeader, IonToolbar, IonTitle, IonApp, IonList, IonContent} from '@ionic/react';
import React from 'react'
import Footer from './Footer'
import CAddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import '../theme/variables.css';

const App = () => (
  <IonApp>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDo List</IonTitle>
        </IonToolbar>
      </IonHeader>
        <IonContent>          
          <IonList>
            <CAddTodo />
            <VisibleTodoList />
          </IonList>
        </IonContent>
      <Footer />
    </IonPage>
  </IonApp>
)
export default App
