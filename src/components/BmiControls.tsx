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
        <IonRow>
            <IonCol className="ion-text-left">
                <IonButton onClick={handleCalculateBmi}>
                <IonIcon icon={calculatorOutline} slot="start" />
                Calculate
                </IonButton>
            </IonCol>
            <IonCol className="ion-text-right">
                <IonButton onClick={handleResetInput}>
                <IonIcon icon={refreshOutline} slot="start" />
                Reset
                </IonButton>
            </IonCol>
        </IonRow>
    );
};

export default BmiControls;