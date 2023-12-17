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
  IonTitle,
} from '@ionic/react';
import Buttons from '../../components/button/buttons';
import { useHistory } from 'react-router-dom';
import './LoginAdmin.css'

interface FormAdminProps { }

const FormAdmin: React.FC<FormAdminProps> = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true); // Set default to login
  const history = useHistory();

  const handleLogin = () => {
    setIsLogin(true);
  };

  const handleAdminLogin = () => {
    // Implement admin login logic here
    // For now, let's just show the same alert as a regular login
    setShowAlert(true);
  };

  const showAlertOnClick = () => {
    setShowAlert(true);
    history.push('/Admin');
  };

  return (
    <IonPage className="formAdmin">
      <IonCard className="centered-card-Admin">
        <div className="login-container-Admin">
          <div className='form-admin'>
            <IonCardHeader className="headerAdmin">
              <p>
                <IonCardTitle className="tittleAdmin">
                  <strong>Admin Login</strong>
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
                  style={{ border: '1px solid grey', width: '100%', height: '50px' }}
                />
              </div>
              <div>
                <p className="passwordAdmin" style={{ marginTop: '8px' }}>
                  <strong>Password</strong>
                </p>
                <IonInput
                  placeholder=" Password"
                  type="password"
                  style={{ border: '1px solid grey', width: '100%', height: '50px' }}
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
                  onClick={isLogin ? showAlertOnClick : handleAdminLogin}
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
              header={isLogin ? 'Login Success' : 'Admin Login Success'}
              message={isLogin ? 'You have successfully logged in!' : 'Admin login successful!'}
              buttons={['OK']}
            />
          </div>
          <div className='imageAdmin'>
            <img src="https://png.pngtree.com/png-vector/20221124/ourmid/pngtree-recruitment-job-for-social-media-admin-png-image_6478542.png" />
          </div>
        </div>
      </IonCard>
    </IonPage>
  );
};

export default FormAdmin;
