import React from 'react';
// importing ionic-react components
import { IonRow, IonCol, IonCard, IonCardContent } from '@ionic/react';

const BmiResult: React.FC<{ calculatedBmi: number }> = ({ calculatedBmi }) => {
    return (
        <IonRow>
            <IonCol>
                <IonCard>
                    <IonCardContent className="ion-text-center">
                    <h2>Your Body Mass Index</h2>
                    <h3>{calculatedBmi.toFixed(2)}</h3>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        </IonRow>
    );
};

export default BmiResult;