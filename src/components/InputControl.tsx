import React from 'react';
// importing ionic-react components
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';

const InputControl: React.FC<{
    selectedValue: 'mkg' | 'ftlbs';
    handleSelectUnit: (value: 'mkg' | 'ftlbs') => void;
    }> = ({ selectedValue, handleSelectUnit }) => {

    // onIonChange -> event emitter (function)
    const handleInputChange = (event: CustomEvent) => {
        handleSelectUnit(event.detail.value);
    };

    return (
        <IonSegment value={selectedValue} onIonChange={handleInputChange} > 
            <IonSegmentButton value="mkg">
                <IonLabel>m/kg</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="ftlbs">
                <IonLabel>ft/lbs</IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;