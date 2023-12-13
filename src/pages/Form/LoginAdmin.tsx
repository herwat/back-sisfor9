import React, { useState } from 'react';
import { IonPage, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonTitle, IonCardTitle, IonInput, IonAlert } from '@ionic/react';
import './FormLogin.css';
import Buttons from '../../components/button/buttons';
import Header from '../../components/header/Header';
import { useHistory } from 'react-router-dom';

function FormAdmin() {
  const [showAlert, setShowAlert] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // Set default to login
  const history = useHistory();

  const handleLogin = () => {
    setIsLogin(true);
  }

  const handleAdminLogin = () => {
    // Implement admin login logic here
    // For now, let's just show the same alert as a regular login
    setShowAlert(true);
  }

  const showAlertOnClick = () => {
    setShowAlert(true);
    history.push('/home');
  }

  return (
    <IonPage className="form">
      <Header />
      <IonCard className="judul">
        <IonTitle className="custom-ion-title">
          <h1>Sistem Informasi Penelitian dan Publikasi</h1>
        </IonTitle>
      </IonCard>
      <IonCard className="centered-card">
        <img className="pictlogo" alt="Logo_UH" src="Logo_UH.png" />
        <div>
          <IonCardHeader className='header'>
            <p>
              <IonCardTitle className='tittle'>
                <strong>{isLogin ? 'Login' : 'Admin Login'}</strong>
              </IonCardTitle>
            </p>
          </IonCardHeader>
          <IonCardContent className="content">
            <div>
              <p className="Email">
                <strong>Email Address/Username</strong>
              </p>
              <IonInput
                placeholder="  Email/Username"
                style={{ border: '1px solid grey', width: '500px', height: '50px' }}
              />
            </div>
            <div>
              <br></br>
              <p className='password'>
                <strong>Password</strong>
              </p>
              <IonInput
                placeholder="  Password"
                type="password"
                style={{ border: '1px solid grey', width: '500px', height: '50px' }}
              />
            </div>
            {isLogin && (
              <div className='rememberme'>
                <IonCheckbox> Remember Me </IonCheckbox>
              </div>
            )}
            <p className='button'>
              <Buttons
                buttonName={isLogin ? 'Login' : 'Admin Login'}
                maxWidth={isLogin ? '60px' : '100px'}
                fillType="solid"
                shape="round"
                onClick={isLogin ? showAlertOnClick : handleAdminLogin}
                style={{ width: '100%' }}
              />
            </p>
          </IonCardContent>
          {isLogin && (
            <p className='ready'>
              <br></br>
              Don't have an account?{' '}
              <a href="#" onClick={(event) => { event.preventDefault(); handleLogin(); }}>
                Register here
              </a>
            </p>
          )}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            header={isLogin ? 'Login Success' : 'Admin Login Success'}
            message={isLogin ? 'You have successfully logged in!' : 'Admin login successful!'}
            buttons={['OK']}
          />
        </div>
      </IonCard>
    </IonPage>
  );
}

export default FormAdmin;
