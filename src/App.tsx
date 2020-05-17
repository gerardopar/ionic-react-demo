import React from 'react';
import { 
  IonApp, 
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput, 
  IonItem,
  IonButton,
  IonIcon 
} from '@ionic/react';
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

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
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonHeader>
      <IonToolbar>
        <IonTitle>BMI Calculator</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonGrid className="ion-padding">
        <IonRow>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Height</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
          <IonCol>
            <IonItem>
              <IonLabel position="floating">Your Weight</IonLabel>
              <IonInput></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-text-left">
            <IonButton>
              <IonIcon icon={calculatorOutline} slot="start" />
              Calculate
            </IonButton>
          </IonCol>
          <IonCol className="ion-text-right">
            <IonButton>
              <IonIcon icon={refreshOutline} slot="start" />
              Reset
              </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol></IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonApp>
);

export default App;
