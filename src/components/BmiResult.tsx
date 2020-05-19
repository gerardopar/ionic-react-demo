import React from 'react';
// importing ionic-react components
import { IonCard, IonCardContent } from '@ionic/react';
// importing styles
import './BmiResult.css';

const BmiResult: React.FC<{ calculatedBmi: number }> = ({ calculatedBmi }) => {
    return (
        <IonCard className="result">
            <IonCardContent className="ion-text-center">
            <h2 className="result__title">Your Body Mass Index</h2>
            <h3 className="result__subtitle">{calculatedBmi.toFixed(2)}</h3>
            </IonCardContent>
        </IonCard>
    );
};

export default BmiResult;