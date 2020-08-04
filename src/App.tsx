import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import './theme/variables.scss';
import { Toolbar } from './components/toolbar';
import { HomeTab } from './components/tabs/home';
import { About } from './components/tabs/about';
import { informationCircle, homeOutline } from 'ionicons/icons';

import './app.scss'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id='main'>
        <IonTabs>
          <IonRouterOutlet>
            <IonPage>
              <Toolbar />
              <Route path='/' component={HomeTab} exact />
              <Route path='/about' component={About} exact />
              <Redirect from='*' to='/' />
            </IonPage>
          </IonRouterOutlet>
          <IonTabBar slot='bottom' className='tabBar'>
            <IonTabButton tab='home' href='/homeTab'>
              <IonIcon icon={homeOutline}></IonIcon>
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab='about' href='/about'>
              <IonIcon icon={informationCircle} />
              <IonLabel>About</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
