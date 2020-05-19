import React, { useRef, useState } from 'react';
import { 
  IonApp, 
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonInput, 
  IonItem,
  IonAlert,
  IonCard,
  IonCardContent,
} from '@ionic/react';

// importing components
import Header from './components/Header';
import InputControl from './components/InputControl';
import BmiControls from './components/BmiControls';
import BmiResult from './components/BmiResult';

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



const App: React.FC = () => {
  const [ calculatedBmi, setCalculatedBmi ] = useState<number>();
  const [ error, setError ] = useState<string>();
  const [ calcUnits, setCalcUnits ] = useState<'mkg' | 'ftlbs'>('mkg');
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  
  const handleCalculateBmi = () => {
    // const enteredHeight = heightInputRef.current ? heightInputRef.current.value : null;
    // const enteredWeight = weightInputRef.current ? weightInputRef.current.value : null;
    // ! in a typescript ternary operator 
    // ! (? -> can be a null value) (! -> guarantees to always have a value)
    const enteredHeight = heightInputRef.current!.value; // shorthand ternary operator typescript 
    const enteredWeight = weightInputRef.current!.value; // shorthand ternary operator typescript

    if(
      !enteredHeight || 
      !enteredWeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
      ) {
      setError('Please enter a valid input number.');
      return;
    }

    const weightConversionFactor = calcUnits === 'ftlbs' ? 2.2 : 1;
    const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;

    const weight = +enteredWeight / weightConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };

  const handleResetInput = () => {
    // clears the input fields
    heightInputRef.current!.value = '';
    weightInputRef.current!.value = '';
    setCalculatedBmi(0);
  };

  const handleClearError = () => {
    setError('');
  };

  const handleSelectUnit = (selectedValue: 'mkg' | 'ftlbs') => {
    setCalcUnits(selectedValue);
  };

  return (
    <React.Fragment>
    <IonAlert 
      isOpen={!!error}
      message={error}
      buttons={[{ text: 'Okay', handler: handleClearError }]}
    />
    <IonApp>
        <Header />
        <IonContent>
          <IonGrid className="ion-no-padding">
            <IonRow>
              <IonCol 
                sizeSm="8" 
                offsetSm="2" 
                sizeMd="6" 
                offsetMd="3"
                >
                  <IonCard className="ion-no-margin">
                    <IonCardContent>
                    <IonGrid className="ion-padding">
                      <IonRow>
                          <IonCol>
                            <InputControl selectedValue={calcUnits} handleSelectUnit={handleSelectUnit} />
                          </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel 
                              position="floating"
                            >
                              Your Height ({ calcUnits === 'mkg' ? 'meters' : 'feet'})
                            </IonLabel>
                            <IonInput type="number" ref={heightInputRef}></IonInput>
                          </IonItem>
                        </IonCol>
                        <IonCol>
                          <IonItem>
                            <IonLabel 
                              position="floating"
                            >
                              Your Weight ({ calcUnits === 'mkg' ? 'kg' : 'lbs'})
                            </IonLabel>
                            <IonInput type="number" ref={weightInputRef}></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <BmiControls 
                        handleCalculateBmi={handleCalculateBmi}
                        handleResetInput={handleResetInput}
                      />
                    </IonGrid>
                    </IonCardContent>
                  </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
              {
                calculatedBmi ? <BmiResult calculatedBmi={calculatedBmi} /> : null
              }
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonApp>
    </React.Fragment>
  )
};

export default App;
