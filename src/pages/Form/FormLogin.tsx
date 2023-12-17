import React, { useState } from 'react';
import { IonPage, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonTitle, IonCardTitle, IonInput, IonAlert, IonInfiniteScroll } from '@ionic/react';
import './FormLogin.css';
import Buttons from '../../components/button/buttons';
import Header from '../../components/header/Header';
import { useHistory } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../pages/firebase/firebase';

interface FormMemberProps {}

const FormMember: React.FC<FormMemberProps> = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [reminder, setReminder] = useState<boolean>(false);
  const [alertWrong, setAlertWrong] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const history = useHistory();

  const handleLogin = async () => {
    setIsRegister(false);
    try {
      // Perform Firebase login
      await signInWithEmailAndPassword(auth, emailValue, passwordValue);

      if (reminder) {
        // Implement your reminder logic here
        console.log('Reminder activated!');
      }

      setShowAlert(true);
    } catch (error) {
      setAlertWrong(true);
      console.error('Error signing in:', error);
    }
  };

  const handleRegister = async () => {
    setIsRegister(true);

    try {
      // Perform Firebase registration
      await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

      setShowAlert(true);
    } catch (error) {
      setAlertWrong(true);
      console.error('Error registering:', error);
    }
  };

  const showAlertOnClick = () => {
    setShowAlert(true);
    history.push('/home');

    if (isRegister) {
      history.push('/formMember');
    }

    if (reminder) {
      // Implement your reminder logic here
      console.log('Reminder activated!');
    }
  };

  const handleRegisterButtonClick = () => {
    // Navigate to the card login page
    history.push('/cardLogin'); // Replace with the actual path
  };

  return (
    <IonPage className="form">
      <Header />
      
      <IonCard className="centered-card">
      <IonInfiniteScroll>
        <IonTitle className="judul">
          <h1>Sistem Informasi Penelitian dan Publikasi</h1>
        </IonTitle>

        <img className="pictlogo" alt="Logo_UH" src="Logo_UH.png" />

        <div>
          <IonCardHeader className="header">
            <p>
              <IonCardTitle className="tittle">
                <strong>{isRegister ? 'Register' : 'Login'}</strong>
              </IonCardTitle>
            </p>
          </IonCardHeader>

          <IonCardContent className="content">
            <div>
              <p className="Email">
                <strong>Email Address/Username</strong>
              </p>
              <IonInput className='input-login'
                placeholder="  Email/Username"
                style={{ border: '1px solid grey', width: '600px', height: '50px' }}
                value={emailValue}
                onIonChange={(e) => setEmailValue(e.detail.value!)}
              />
            </div>
            <div>
              <br />
              <p className="password">
                <strong>Password</strong>
              </p>
              <IonInput
              className='input-login'
                placeholder="  Password"
                type="password"
                style={{ border: '1px solid grey', width: '600px', height: '50px' }}
                value={passwordValue}
                onIonChange={(e) => setPasswordValue(e.detail.value!)}
              />
            </div>

            {!isRegister && (
              <div className="rememberme">
                <IonCheckbox checked={reminder} onIonChange={(e) => setReminder(e.detail.checked)}>
                  Remember Me
                </IonCheckbox>
              </div>
            )}

            {isRegister ? (
                <div className="register-link">
                  <p className="already">
                    Already have an account?{' '}
                    <a href="#" onClick={(event) => { event.preventDefault(); handleLogin(); }}>
                      Login here
                    </a>
                  </p>
                  <p className="button">
                    <Buttons
                      buttonName= "Register"
                      maxWidth="100px"
                      fillType="solid"
                      shape="round"
                      onClick={handleRegister}
                      style={{ width: '100%' }}
                    />
                  </p>
                </div>
              ) : (
                <div className="register-link">
                  <p className="already">
                    Don't have an account?{' '}
                    <a href="#" onClick={(event) => { event.preventDefault(); handleRegister(); }}>
                      Register here
                    </a>
                  </p>
                  <p className="button">
                    <Buttons
                      buttonName= "Login"
                      maxWidth="100px"
                      fillType="solid"
                      shape="round"
                      onClick={handleLogin}
                      style={{ width: '100%' }}
                    />
                  </p>
                </div>
              )}


          </IonCardContent>

          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header="Success"
            message="You have successfully!"
            onClick={showAlertOnClick}
            buttons={['OK']}
          />

          <IonAlert
            isOpen={alertWrong}
            onDidDismiss={() => setAlertWrong(false)}
            header="Failed"
            message="oow,error!"
            buttons={['OK']}
          />

        </div>
        </IonInfiniteScroll>
      </IonCard>
    
    </IonPage>
  );
};

export default FormMember;