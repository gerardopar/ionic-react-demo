// importing modules
import React from 'react';
// * importing ionic-react components
import {
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
} from '@ionic/react';
// * importing ionic icons
import { calculatorOutline, refreshOutline } from 'ionicons/icons';

const BmiControls: React.FC<{ // typescript props -> definitions
        handleCalculateBmi: () => void;
        handleResetInput: () => void;
    }> = ({ handleCalculateBmi, handleResetInput }) => {
    return (
        <IonRow className="ion-margin-top">
            <IonCol size="12" sizeMd="6" className="ion-text-center">
                <IonButton 
                    expand="block" 
                    color="primary" 
                    onClick={handleCalculateBmi}
                >
                <IonIcon icon={calculatorOutline} slot="start" />
                Calculate
                </IonButton>
            </IonCol>
            <IonCol size="12" sizeMd="6" className="ion-text-center">
                <IonButton 
                    expand="block" 
                    color="secondary" 
                    fill="outline" 
                    onClick={handleResetInput}
                >
                <IonIcon icon={refreshOutline} slot="start" />
                Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControls;