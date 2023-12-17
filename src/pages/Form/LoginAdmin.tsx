import React, { useState } from 'react';
import {
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonAlert,
  IonCheckbox,
} from '@ionic/react';
import Buttons from '../../components/button/buttons';
import { useHistory } from 'react-router-dom';

interface FormAdminProps {}

const FormAdmin: React.FC<FormAdminProps> = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true); // Set default to login
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [passwordInput, setPasswordInput] = useState<string>('');
  const history = useHistory();

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleAdminLogin = () => {
    const username = 'admin'; 
    const password = 'password123'; 

    if (usernameInput === username && passwordInput === password) {
      
      history.push('/Admin');
    } else {
    
      console.error('Username atau password salah');
      setShowAlert(true); 
    }
  };

  const showAlertOnClick = () => {
    setShowAlert(true);
    history.push('/Admin');
  };

  return (
    <IonPage className="formAdmin">
      <IonCard className="juduLAdmin">
      </IonCard>
      <IonCard className="centered-card-Admin">
        <div className="login-container-Admin">
          <div>
            <IonCardHeader className="headerAdmin">
              <p>
                <IonCardTitle className="tittleAdmin">
                  <strong>{isLogin ? 'Login' : 'Admin Login'}</strong>
                </IonCardTitle>
              </p>
            </IonCardHeader>
            <IonCardContent className="contentAdmin">
              <div>
                <p className="EmailAdmin">
                  <strong>Email Address/Username</strong>
                </p>
                <IonInput
                  placeholder=" Email/Username"
                  style={{ border: '1px solid grey', width: '500px', height: '50px' }}
                  onIonChange={(e) => setUsernameInput(e.detail.value!)}
                />
              </div>
              <div>
                <br />
                <p className="passwordAdmin">
                  <strong>Password</strong>
                </p>
                <IonInput
                  placeholder=" Password"
                  type="password"
                  style={{ border: '1px solid grey', width: '500px', height: '50px' }}
                  onIonChange={(e) => setPasswordInput(e.detail.value!)}
                />
              </div>
              {isLogin && (
                <div className="remembermeAdmin">
                  <IonCheckbox> Remember Me </IonCheckbox>
                </div>
              )}
              <p className="buttonAdmin">
                <Buttons
                  buttonName={isLogin ? 'Login' : 'Admin Login'}
                  maxWidth={isLogin ? '70px' : '100px'}
                  fillType="solid"
                  shape="round"
                  onClick={handleAdminLogin}
                  style={{ width: '100%' }}
                />
              </p>
            </IonCardContent>
            {isLogin && (
              <p className="readyAdmin">
                <br />
                Don't have an account?{' '}
                <a href="#" onClick={(event) => { event.preventDefault(); handleLogin(); }}>
                  Register here
                </a>
              </p>
            )}
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header="Terjadi Kesalahan!"
              message="Password atau username yang di masukkan invalid"
              buttons={['OK']}
            />
          </div>
        </div>
      </IonCard>
    </IonPage>
  );
};

export default FormAdmin;
