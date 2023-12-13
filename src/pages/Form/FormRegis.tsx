// import React, { useState } from 'react';
// import { IonPage, IonCheckbox, IonCard, IonCardContent, IonCardHeader, IonTitle, IonCardTitle, IonInput, IonAlert } from '@ionic/react'; // added IonPage here
// import './FormLogin.css'
// import Buttons from '../../components/button/buttons';
// import Header from '../../components/header/Header';
// import { useHistory } from 'react-router-dom';


// function formMembers() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [isRegister, setIsRegister] = useState(false);
//   const [reminder] = useState(false);
//   const history = useHistory();

//   const handleLogin = () => {
//     setIsRegister(false);
//   }

//   const handleRegister = () => {
//     setIsRegister(true);
//   }

//   const showAlertOnClick = () => {
//     setShowAlert(true);
//     history.push('/home');
//     if (isRegister) {
//       history.push('/formMember');
//     }
//   }

//   const handleReminderChange = () => {
//   }

//   return (
//     <IonPage className="form">
//       <Header />
//       <IonCard className="judul">
//         <IonTitle className="custom-ion-title">
//           <h1>
//             Sistem Informasi Penelitian dan Publikasi
//           </h1>
//         </IonTitle>
//       </IonCard>
//       <IonCard className="centered-card">

//         <img className="pictlogo" alt="Logo_UH" src="Logo_UH.png" />
//         <div>


//           <IonCardHeader className='header'>
//             <p>
//               <IonCardTitle className='tittle'>

//                 <strong>{isRegister ? 'Register' : 'Login'}</strong>

//               </IonCardTitle>
//             </p>
//           </IonCardHeader>

//           <IonCardContent className="content">
//             <div>
//               <p className="Email">
//                 <strong>Email Address/Username</strong>
//               </p>
//               <IonInput
//                 placeholder="  Email/Username"
//                 style={{ border: '1px solid grey', width: '500px', height: '50px' }}
//               />
//             </div>
//             <div>
//               <br></br>
//               <p className='password'>
//                 <strong>Password</strong>
//               </p>
//               <IonInput
//                 placeholder="  Password"
//                 type="password"
//                 style={{ border: '1px solid grey', width: '500px', height: '50px' }}
//               />
//             </div>

//             {isRegister ? (
//               <p className='ready'>
//                 <br></br>
//                 Already have an account?{' '}
//                 <a href="#" onClick={(event) => { event.preventDefault(); handleLogin(); }}>
//                   Login here
//                 </a>
//               </p>
//             ) : (

//               <div className='rememberme'>
//                 <IonCheckbox> Remember Me </IonCheckbox>

//                 <p className='already'>
//                   Don't have an account?{' '}
//                   <a href="#" onClick={(event) => { event.preventDefault(); handleRegister(); }}>
//                     Register here
//                   </a>
//                 </p>
//               </div>
//             )}

//             <p className='button'>
//               <Buttons
//                 buttonName={isRegister ? 'Register' : 'Login'}
//                 maxWidth={isRegister ? '100px' : '60px'}
//                 fillType="solid"
//                 shape="round"
//                 onClick={showAlertOnClick}
//                 style={{ width: '100%' }}
//               />
//             </p>
//           </IonCardContent>

//           <IonAlert
//             isOpen={showAlert}
//             onDidDismiss={() => setShowAlert(false)}
//             header={isRegister ? 'Registration Success' : 'Login Success'}
//             message={
//               isRegister ? 'You have successfully registered!' : 'You have successfully logged in!'
//             }
//             buttons={['OK']}
//           />
//         </div>
//       </IonCard>

//     </IonPage>
//   );
// };

// export default formMembers;


// import React, { useState } from 'react';
// import {
//   IonPage,
//   IonCheckbox,
//   IonCard,
//   IonCardContent,
//   IonCardHeader,
//   IonTitle,
//   IonCardTitle,
//   IonInput,
//   IonAlert,
// } from '@ionic/react';
// import { useHistory } from 'react-router-dom';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth, analytics } from '../../pages/firebase/firebase';
// import './FormLogin.css';
// import Buttons from '../../components/button/buttons';
// import Header from '../../components/header/Header';

// function FormMember() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [isRegister, setIsRegister] = useState(false);
//   const [alertWrong, setAlertWrong] = useState(false);
//   const [emailValue, setEmailValue] = useState('');
//   const [passwordValue, setPasswordValue] = useState('');
//   const history = useHistory();

//   const handleLogin = async () => {
//     setIsRegister(false);
//     try {
//       await signInWithEmailAndPassword(auth, emailValue, passwordValue);

//       setShowAlert(true);
//     } catch (error) {
//       setAlertWrong(true);
//       console.error('Error signing in:', error);
//     }
//   };

//   const handleRegister = async () => {
//     setIsRegister(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, emailValue, passwordValue);

//       analytics.logEvent('user_registration', {
//         user_id: userCredential.user.uid,
//         email: userCredential.user.email,
//       });

//       // Additional registration logic if needed
//       // ...

//       setShowAlert(true);
//     } catch (error) {
//       setAlertWrong(true);
//       console.error('Error registering:', error);
//     }
//   };

//   const showAlertOnClick = () => {
//     setShowAlert(true);
//     history.push('/home');

//     if (isRegister) {
//       history.push('/formMember');
//     }
//   };

//   const handleRegisterButtonClick = () => {
//     history.push('/cardLogin'); // Replace with the actual path
//   };

//   return (
//     <IonPage className="form">
//       <Header />

//       <IonCard className="centered-card">
//         {/* ... rest of your code ... */}

//         <IonAlert
//           isOpen={showAlert}
//           onDidDismiss={() => setShowAlert(false)}
//           header="Operation Success"
//           message={isRegister ? 'Registration successful!' : 'Login successful!'}
//           onDidDismiss={showAlertOnClick}
//           buttons={['OK']}
//         />

//         <IonAlert
//           isOpen={alertWrong}
//           onDidDismiss={() => setAlertWrong(false)}
//           header="Operation Failed"
//           message={isRegister ? 'Registration failed!' : 'Login failed!'}
//           buttons={['OK']}
//         />
//       </IonCard>
//     </IonPage>
//   );
// }

// export default FormMember;
