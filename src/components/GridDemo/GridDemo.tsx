import React from 'react';
// importing ionic-react components
import { IonApp, IonContent, IonGrid, IonRow, IonCol } from '@ionic/react';

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
import '../../theme/variables.css';
import './GridDemo.css';

const GridDemo: React.FC = () => {
    return (
        <IonApp>
            <IonContent>
                <IonGrid className="demoGrid" fixed>
                    <IonRow className="demoGrid__row ion-align-items-center">
                        <IonCol sizeMd="6" sizeSm="12" sizeXs="12">1</IonCol>
                        <IonCol>2</IonCol>
                        <IonCol className="ion-text-right">3</IonCol>
                    </IonRow>
                    <IonRow className="demoGrid__row">
                        <IonCol size="12" offsetLg="6" offsetXs="0" className="ion-text-center">4</IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonApp>
    );
};

export default GridDemo;